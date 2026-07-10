import React from "react";
import { hero } from "../data/hero_data";

function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">

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
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">

                    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-md">
                        {hero.badge}
                    </span>

                    <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                        {hero.title}
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                        {hero.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-5">
                        {hero.buttons.map((button) => (
                            <a
                                key={button.text}
                                href={button.link}
                                className={
                                    button.variant === "primary"
                                        ? "rounded-lg bg-[#0077c8] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#005fa3] hover:shadow-2xl"
                                        : "rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                                }
                            >
                                {button.text}
                            </a>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">

                        {hero.highlights.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-xl"
                            >
                                <h3 className="text-3xl font-bold text-white">
                                    {item.value}
                                </h3>

                                <p className="mt-2 text-sm text-gray-300">
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