import React from "react";
import { hero } from "../data/hero_data";

function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src={hero.video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/65 to-black/50" />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center">
                <div className="mx-auto w-full max-w-7xl px-6 py-28 md:px-8 lg:px-12 xl:px-16">

                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium tracking-wide text-white backdrop-blur-md">
                        {hero.badge}
                    </span>

                    {/* Heading */}
                    <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[1.15] text-white md:text-6xl xl:text-7xl">
                        {hero.title}
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-300">
                        {hero.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-wrap gap-5">
                        {hero.buttons.map((button) => (
                            <a
                                key={button.text}
                                href={button.link}
                                className={
                                    button.variant === "primary"
                                        ? "rounded-xl bg-[#0077C8] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#005fa3] hover:shadow-2xl"
                                        : "rounded-xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#063B78]"
                                }
                            >
                                {button.text}
                            </a>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-20 flex flex-wrap gap-5 lg:gap-6">
                        {hero.highlights.map((item) => (
                            <div
                                key={item.label}
                                className="min-w-45 rounded-2xl border border-white/15 bg-white/10 px-8 py-7 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/20 hover:shadow-xl"
                            >
                                <h3 className="text-3xl font-bold text-white">
                                    {item.value}
                                </h3>

                                <p className="mt-2 text-sm font-medium tracking-wide text-gray-300">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Hero;