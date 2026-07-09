import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
    return (
        <div>
            {/* Heading */}
            <h3
                className="
                    relative
                    inline-block

                    pb-3

                    text-lg
                    font-semibold
                    tracking-wide

                    text-white

                    after:absolute
                    after:left-0
                    after:bottom-1

                    after:h-0.5
                    after:w-10

                    after:rounded-full
                    after:bg-[#0077c8]
                "
            >
                {title}
            </h3>

            {/* Links */}
            <ul
                className="
                    mt-7
                    space-y-4
                "
            >
                {links.map((link) => (
                    <li key={link.id}>
                        <Link
                            to={link.path}
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2

                                text-[15px]
                                text-gray-400

                                transition-all
                                duration-300

                                hover:translate-x-2
                                hover:text-white
                            "
                        >
                            {/* Hover Accent */}
                            <span
                                className="
                                    h-1.5
                                    w-1.5

                                    rounded-full

                                    bg-[#0077c8]

                                    opacity-0

                                    transition-all
                                    duration-300

                                    group-hover:opacity-100
                                "
                            />

                            <span
                                className="
                                    transition-colors
                                    duration-300
                                "
                            >
                                {link.title}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;