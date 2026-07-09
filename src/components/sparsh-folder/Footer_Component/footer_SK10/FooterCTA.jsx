import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
    return (
        <section
            className="
                relative
                border-b
                border-white/10
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl

                    px-6
                    py-14

                    sm:px-8
                    lg:px-10
                    lg:py-20
                "
            >
                <div
                    className="
                        relative
                        overflow-hidden

                        rounded-3xl

                        border
                        border-white/10

                        bg-linear-to-r
                        from-[#005BAA]
                        via-[#0077C8]
                        to-[#0099E6]

                        px-8
                        py-10

                        shadow-2xl

                        lg:flex
                        lg:items-center
                        lg:justify-between

                        lg:px-14
                        lg:py-14
                    "
                >
                    {/* Decorative Glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -top-20
                            -right-20

                            h-60
                            w-60

                            rounded-full
                            bg-white/10
                            blur-3xl
                        "
                    />

                    {/* Left */}
                    <div
                        className="
                            relative
                            z-10

                            max-w-3xl
                        "
                    >
                        <span
                            className="
                                inline-flex
                                rounded-full

                                bg-white/15

                                px-4
                                py-1.5

                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]

                                text-white/90
                            "
                        >
                            Let's Work Together
                        </span>

                        <h2
                            className="
                                mt-5

                                text-3xl
                                font-bold
                                leading-tight

                                text-white

                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Ready to Build Your Next Digital Solution?
                        </h2>

                        <p
                            className="
                                mt-5

                                max-w-2xl

                                text-base
                                leading-8

                                text-blue-100

                                sm:text-lg
                            "
                        >
                            Whether you're launching a new product,
                            modernizing an existing platform, or scaling your
                            business, we're here to help transform your ideas
                            into reality.
                        </p>
                    </div>

                    {/* Right */}
                    <div
                        className="
                            relative
                            z-10

                            mt-8

                            lg:mt-0
                            lg:ml-12
                            lg:shrink-0
                        "
                    >
                        <Link
                            to="/contact"
                            className="
                                group

                                inline-flex
                                items-center
                                justify-center
                                gap-3

                                rounded-xl

                                bg-white

                                px-7
                                py-4

                                text-sm
                                font-semibold

                                text-[#005BAA]

                                shadow-lg

                                transition-all
                                duration-300

                                hover:-translate-y-1
                                hover:shadow-2xl
                                hover:bg-gray-100

                                active:translate-y-0
                            "
                        >
                            Start a Conversation

                            <ArrowRight
                                size={18}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterCTA;