import { ChevronDown } from "lucide-react";

const MobileAccordion = ({
    title,
    isOpen,
    onToggle,
    children,
}) => {
    return (
        <div
            className="
                border-b
                border-gray-100
            "
        >
            {/* Accordion Header */}
            <button
                type="button"
                onClick={onToggle}
                className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-between

                    overflow-hidden

                    px-6
                    py-4

                    text-left
                    text-[15px]
                    font-medium
                    text-gray-800

                    transition-all
                    duration-300

                    hover:bg-blue-50/60
                    hover:text-[#0077c8]
                "
            >
                {/* Left Accent */}
                <span
                    className={`
                        absolute
                        left-0
                        top-0
                        h-full
                        w-1
                        rounded-r-full
                        bg-[#0077c8]

                        transition-all
                        duration-300

                        ${isOpen
                            ? "opacity-100 scale-y-100"
                            : "opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100"
                        }
                    `}
                />

                {/* Title */}
                <span
                    className={`
                        transition-all
                        duration-300
                        ${isOpen
                            ? "translate-x-2 text-[#0077c8]"
                            : "group-hover:translate-x-2"
                        }
                    `}
                >
                    {title}
                </span>

                {/* Chevron */}
                <ChevronDown
                    size={18}
                    className={`
                        transition-all
                        duration-300
                        ${isOpen
                            ? "rotate-180 text-[#0077c8]"
                            : "text-gray-500 group-hover:text-[#0077c8]"
                        }
                    `}
                />
            </button>

            {/* Accordion Content */}
            <div
                className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ease-in-out

                    ${isOpen
                        ? "max-h-[700px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                `}
            >
                <div className="px-6 pb-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MobileAccordion;