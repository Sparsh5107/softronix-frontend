import { Menu, X } from "lucide-react";

const MobileMenuButton = ({ isOpen, onToggle }) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
                lg:hidden

                flex
                items-center
                justify-center

                w-11
                h-11

                rounded-md

                text-gray-800
                transition-all
                duration-300

                hover:bg-gray-100
                hover:text-[#0077c8]

                focus:outline-none
                focus:ring-2
                focus:ring-[#0077c8]/30
            "
        >
            <div className="relative w-6 h-6">
                {/* Menu Icon */}
                <Menu
                    size={24}
                    className={`
                        absolute inset-0
                        transition-all
                        duration-300

                        ${isOpen
                            ? "opacity-0 rotate-90 scale-75"
                            : "opacity-100 rotate-0 scale-100"
                        }
                    `}
                />

                {/* Close Icon */}
                <X
                    size={24}
                    className={`
                        absolute inset-0
                        transition-all
                        duration-300

                        ${isOpen
                            ? "opacity-100 rotate-0 scale-100"
                            : "opacity-0 -rotate-90 scale-75"
                        }
                    `}
                />
            </div>
        </button>
    );
};

export default MobileMenuButton;