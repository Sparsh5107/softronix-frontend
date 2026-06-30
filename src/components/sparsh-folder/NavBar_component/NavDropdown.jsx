import { ChevronDown } from "lucide-react";

const NavDropdown = ({ title, items }) => {
    // Split the items into two equal columns
    const middle = Math.ceil(items.length / 2);

    const firstColumn = items.slice(0, middle);
    const secondColumn = items.slice(middle);

    return (
        <div className="group">
            {/* Trigger */}
            <button
                className="
                    flex items-center gap-1
                    h-[76px]
                    text-[15px]
                    font-medium
                    text-gray-900
                    transition-colors
                    duration-200
                    hover:text-blue-700
                "
            >
                <span>{title}</span>

                <ChevronDown
                    size={16}
                    className="transition-transform duration-200 group-hover:rotate-180"
                />
            </button>

            {/* Mega Menu */}
            <div
                className="
                    invisible
                    absolute
                    left-0
                    top-full
                    z-50

                    w-screen

                    border-t
                    border-gray-200
                    bg-white

                    opacity-0
                    translate-y-2

                    shadow-md

                    transition-all
                    duration-200

                    group-hover:visible
                    group-hover:opacity-100
                    group-hover:translate-y-0
                "
            >
                <div
                    className="
                        mx-auto
                        max-w-7xl

                        grid
                        grid-cols-[360px_1fr]

                        gap-8

                        px-6
                        py-6
                    "
                >
                    {/* Left Blue Card */}
                    <div
                        className="
                            rounded-md
                            bg-blue-800
                            p-7
                            text-white
                        "
                    >
                        <h3 className="text-4xl font-bold">
                            Industry
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-blue-100">
                            Empowering the future through
                            innovation and code.
                        </p>

                        <button
                            className="
                                mt-8
                                w-full
                                rounded-md
                                border
                                border-white

                                py-3

                                text-lg
                                font-medium

                                transition

                                hover:bg-white
                                hover:text-blue-800
                            "
                        >
                            Learn more →
                        </button>
                    </div>

                    {/* Right Links */}
                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-x-20
                        "
                    >
                        <div className="space-y-4">
                            {firstColumn.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="
                                        block
                                        text-[18px]
                                        text-gray-700
                                        transition-colors
                                        hover:text-blue-700
                                    "
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>

                        <div className="space-y-4">
                            {secondColumn.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="
                                        block
                                        text-[18px]
                                        text-gray-700
                                        transition-colors
                                        hover:text-blue-700
                                    "
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavDropdown;