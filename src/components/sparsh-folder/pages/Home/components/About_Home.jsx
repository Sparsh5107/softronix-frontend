import React from "react";
import { about } from "../data/about_service";

function About_Home() {
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-14 px-6 lg:flex-row lg:px-12">

                {/* Left Content */}
                <div className="flex-1">

                    <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#0077c8]">
                        {about.badge}
                    </span>

                    <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
                        {about.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {about.description}
                    </p>

                    {/* Features */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">

                        {about.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0077c8] hover:shadow-lg"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077c8] text-white">
                                    ✓
                                </div>

                                <p className="font-medium text-gray-700">
                                    {feature}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* CTA */}
                    <a
                        href={about.button.link}
                        className="mt-10 inline-block rounded-lg bg-[#0077c8] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#005fa3] hover:shadow-xl"
                    >
                        {about.button.text}
                    </a>

                </div>

                {/* Right Image */}
                <div className="flex-1">

                    <div className="overflow-hidden rounded-3xl shadow-2xl">

                        <img
                            src={about.image}
                            alt={about.title}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About_Home;