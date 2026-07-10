import React from "react";
import { services } from "../data/about_service";

function Services_Home() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-[#f8fbff] via-[#eef7ff] to-[#dbeeff] py-24">
            {/* Background */}
            <div className="absolute -left-55 -top-32 h-125 w-125 rounded-full bg-blue-400/20 blur-[120px] animate-float"></div>

            <div className="absolute right-37.5 top-20 h-150 w-150 rounded-full bg-cyan-300/20 blur-[140px] animate-float-slow"></div>

            <div className="absolute left-1/2 bottom-62.5 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-indigo-400/20 blur-[120px] animate-pulse-slow"></div>
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wider text-[#0077c8]">
                        {services.badge}
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        {services.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {services.description}
                    </p>

                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {services.cards.map((service, index) => (

                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-blue-300/40 hover:shadow-2xl">
                            <div className="absolute left-0 top-0 h-1 w-0 bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full"></div>

                            {/* Image */}
                            <div className="relative overflow-hidden">

                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-60 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-[#0077c8]/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

                            </div>

                            {/* Content */}
                            <div className="p-8">

                                <h3 className="text-2xl font-bold tracking-tight text-slate-900 transition duration-300 group-hover:text-[#0077c8]">                                    {service.title}
                                </h3>

                                <p className="mt-5 leading-8 text-slate-600">
                                    {service.description}
                                </p>

                                <a
                                    href={service.link}
                                    className="mt-8 inline-flex items-center gap-3 font-semibold text-[#0077c8]"
                                >

                                    <span className="transition duration-300 group-hover:translate-x-1">
                                        Learn More
                                    </span>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover:bg-[#0077c8] group-hover:text-white group-hover:rotate-45">

                                        →

                                    </div>

                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Services_Home;