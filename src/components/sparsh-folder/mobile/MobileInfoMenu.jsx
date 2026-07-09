import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MobileInfoMenu = ({
    title,
    description,
    buttonText,
    buttonLink,
    items,
    onClose,
}) => {
    return (
        <div className="space-y-5 pt-4">
            {/* Info Card */}
            <div
                className="
                    group
                    relative
                    overflow-hidden

                    rounded-2xl
                    bg-gradient-to-br
                    from-[#005BAA]
                    to-[#0077C8]

                    p-6

                    text-white

                    shadow-md
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >
                {/* Decorative Circle */}
                <div
                    className="
                        absolute
                        -right-8
                        -top-8

                        h-28
                        w-28

                        rounded-full
                        bg-white/10

                        transition-transform
                        duration-500

                        group-hover:scale-125
                    "
                />

                <div className="relative z-10">
                    <h3 className="text-xl font-semibold">
                        {title}
                    </h3>

                    <p
                        className="
                            mt-3
                            text-sm
                            leading-6
                            text-blue-100
                        "
                    >
                        {description}
                    </p>

                    <Link
                        to={buttonLink}
                        onClick={onClose}
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2

                            rounded-lg
                            border
                            border-white/30

                            bg-white/10

                            px-4
                            py-2

                            text-sm
                            font-medium

                            backdrop-blur-sm

                            transition-all
                            duration-300

                            hover:bg-white
                            hover:text-[#005BAA]
                        "
                    >
                        {buttonText}

                        <ArrowRight
                            size={16}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </Link>
                </div>
            </div>

            {/* Links */}
            <div
                className="
                    overflow-hidden
                    rounded-xl

                    border
                    border-gray-100

                    bg-white

                    shadow-sm
                "
            >
                {items.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        onClick={onClose}
                        className="
                            group
                            flex
                            items-center
                            justify-between

                            border-b
                            border-gray-100
                            last:border-b-0

                            px-5
                            py-4

                            text-[15px]
                            font-medium
                            text-gray-700

                            transition-all
                            duration-300

                            hover:bg-blue-50
                            hover:text-[#0077c8]
                        "
                    >
                        <span
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-2
                            "
                        >
                            {item.title}
                        </span>

                        <ArrowRight
                            size={16}
                            className="
                                opacity-0
                                -translate-x-2

                                text-[#0077c8]

                                transition-all
                                duration-300

                                group-hover:opacity-100
                                group-hover:translate-x-0
                            "
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MobileInfoMenu;