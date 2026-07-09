import { Link } from "react-router-dom";

import {
    bottomLinks,
    copyright,
} from "../footerData";

const FooterBottom = () => {
    return (
        <section
            className="
                border-t
                border-white/10
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    items-center
                    justify-between
                    gap-5

                    px-6
                    py-6

                    sm:px-8

                    lg:flex-row
                    lg:px-10
                "
            >
                {/* Copyright */}
                <p
                    className="
                        text-center
                        text-sm
                        leading-6

                        text-gray-500

                        lg:text-left
                    "
                >
                    {copyright}
                </p>

                {/* Bottom Links */}
                <nav>
                    <ul
                        className="
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-6

                            lg:justify-end
                        "
                    >
                        {bottomLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    to={link.path}
                                    className="
                                        relative

                                        text-sm
                                        font-medium

                                        text-gray-400

                                        transition-all
                                        duration-300

                                        hover:text-white

                                        after:absolute
                                        after:left-0
                                        after:-bottom-1

                                        after:h-0.5
                                        after:w-full

                                        after:origin-left
                                        after:scale-x-0

                                        after:rounded-full
                                        after:bg-[#0077c8]

                                        after:transition-transform
                                        after:duration-300

                                        hover:after:scale-x-100
                                    "
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default FooterBottom;