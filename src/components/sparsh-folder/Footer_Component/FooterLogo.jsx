import { Link } from "react-router-dom";

import {
    logo,
    footerDescription,
    socialLinks,
} from "../Footer_Component/footerData";

const FooterLogo = () => {
    return (
        <div
            className="
                flex
                flex-col
                items-start
            "
        >
            {/* Logo */}
            <Link
                to={logo.path}
                className="
                    inline-block
                    transition-transform
                    duration-300
                    hover:scale-105
                "
            >
                <img
                    src={logo.src}
                    alt={logo.alt}
                    className="
                        h-14
                        w-auto
                        object-contain

                        sm:h-16
                    "
                />
            </Link>

            {/* Description */}
            <p
                className="
                    mt-6

                    max-w-sm

                    text-[15px]
                    leading-8

                    text-gray-400
                "
            >
                {footerDescription}
            </p>

            {/* Social Links */}
            <div
                className="
                    mt-8

                    flex
                    flex-wrap
                    items-center
                    gap-3
                "
            >
                {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.title}
                            className="
                                group

                                flex
                                h-11
                                w-11
                                items-center
                                justify-center

                                rounded-xl

                                border
                                border-white/10

                                bg-white/5

                                text-gray-300

                                backdrop-blur-sm

                                transition-all
                                duration-300

                                hover:-translate-y-1
                                hover:border-[#0077c8]
                                hover:bg-[#0077c8]
                                hover:text-white
                                hover:shadow-lg
                                hover:shadow-[#0077c8]/30
                            "
                        >
                            <Icon
                                size={18}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default FooterLogo;