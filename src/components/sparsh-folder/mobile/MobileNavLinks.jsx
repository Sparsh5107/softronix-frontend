import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    navLinks,
    industries,
    services,
} from "../NavBar_component/navData";

import MobileAccordion from "./MobileAccordion";
import MobileInfoMenu from "./MobileInfoMenu";

const MobileNavLinks = ({ onClose }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const location = useLocation();

    const handleToggle = (menu) => {
        setOpenMenu((prev) => (prev === menu ? null : menu));
    };

    return (
        <nav className="flex flex-col py-4">
            {navLinks.map((link) => {
                if (link.menu) {
                    return (
                        <MobileAccordion
                            key={link.id}
                            title={link.title}
                            isOpen={openMenu === link.menu}
                            onToggle={() => handleToggle(link.menu)}
                        >
                            {link.menu === "industries" ? (
                                <MobileInfoMenu
                                    title="Industry"
                                    description="Empowering the future through innovation and digital transformation."
                                    buttonText="Learn More"
                                    buttonLink="/industries"
                                    items={industries}
                                    onClose={onClose}
                                />
                            ) : (
                                <MobileInfoMenu
                                    title="Services"
                                    description="Helping businesses build innovative digital solutions."
                                    buttonText="Explore Services"
                                    buttonLink="/services"
                                    items={services}
                                    onClose={onClose}
                                />
                            )}
                        </MobileAccordion>
                    );
                }

                const isActive = location.pathname === link.path;

                return (
                    <Link
                        key={link.id}
                        to={link.path}
                        onClick={onClose}
                        className={`
                            group
                            relative
                            flex
                            items-center
                            justify-between

                            overflow-hidden

                            px-6
                            py-4

                            border-b
                            border-gray-100

                            text-[15px]
                            font-medium

                            transition-all
                            duration-300

                            ${isActive
                                ? "text-[#0077c8] bg-blue-50"
                                : "text-gray-800 hover:text-[#0077c8] hover:bg-blue-50/60"
                            }
                        `}
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

                                ${isActive
                                    ? "opacity-100 scale-y-100"
                                    : "opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100"
                                }
                            `}
                        />

                        {/* Text */}
                        <span
                            className="
                                transition-all
                                duration-300
                                group-hover:translate-x-2
                            "
                        >
                            {link.title}
                        </span>

                        {/* Arrow */}
                        <span
                            className="
                                text-lg
                                opacity-0
                                -translate-x-2

                                transition-all
                                duration-300

                                group-hover:opacity-100
                                group-hover:translate-x-0
                            "
                        >
                            →
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default MobileNavLinks;