import React from "react";
import { industries } from "../data/industries";

function Industries_Home() {
    return (
        <section className="bg-slate-50 py-20">

            {/* Container */}
            <div className="mx-auto h-[70%] w-[70%] max-w-6xl">

                {/* Header */}
                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-widest text-[#0077c8]">
                        {industries.badge}
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
                        {industries.title}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        {industries.description}
                    </p>

                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

                    {industries.cards.map((industry, index) => (

                        <div
                            key={index}
                            className={`
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                shadow-lg
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:shadow-2xl
                                hover:shadow-blue-300/20

                                ${index === 0 ? "xl:col-span-2 h-80" : ""}
                                ${index === 5 ? "xl:col-span-2 h-52" : ""}
                                ${index !== 0 && index !== 5 ? "h-52" : ""}
                            `}
                        >

                            {/* Image */}
                            <img
                                src={industry.image}
                                alt={industry.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6">

                                <h3 className="text-xl font-bold text-white">
                                    {industry.title}
                                </h3>

                                <div className="mt-3 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">

                                    <p className="text-sm leading-6 text-gray-200">
                                        {industry.description}
                                    </p>

                                    <a
                                        href={industry.link}
                                        className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0077c8] transition-all hover:bg-[#0077c8] hover:text-white"
                                    >
                                        Explore →
                                    </a>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Industries_Home;