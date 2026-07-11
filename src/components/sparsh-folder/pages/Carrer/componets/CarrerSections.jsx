import React from "react";
import { careerSections } from "../careerdata";

function CareerSections() {
    return (
        <section className="bg-[#f5f5f5] py-16">

            <div className="mx-auto max-w-5xl px-4">

                {/* Heading */}
                <div className="mb-12 text-center">

                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        {careerSections.heading}
                    </h2>

                </div>

                {/* Career Cards */}
                <div className="space-y-1">

                    {careerSections.cards.map((card, index) => (
                        <div
                            key={index}
                            className={`grid overflow-hidden rounded-md bg-white shadow-lg transition duration-300 hover:shadow-xl space-x-0.5 lg:grid-cols-2 ${card.imageLeft ? "" : "lg:[&>*:first-child]:order-2"
                                }`}
                        >

                            {/* Image */}
                            <div className="h-72 md:h-80">

                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-full object-cover"
                                />

                            </div>

                            {/* Content */}
                            <div className="flex items-center bg-[#083b78] px-8 py-8">

                                <div>

                                    <h3 className="mb-4 text-2xl font-semibold leading-snug text-white">
                                        {card.title}
                                    </h3>

                                    <p className="text-justify text-[15px] leading-7 text-gray-100">
                                        {card.description}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Why Join */}
                <div className="mt-16 text-center">

                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        {careerSections.join.title}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
                        {careerSections.join.description}
                    </p>

                </div>

            </div>

            {/* Bottom CTA */}
            <div className="mt-16 bg-[#083b78] py-12">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <h2 className="text-3xl font-bold leading-snug text-white">
                        {careerSections.footerCTA.title}
                    </h2>

                    <button
                        className="mt-6 rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#083b78]"
                    >
                        ✉ {careerSections.footerCTA.button}
                    </button>

                </div>

            </div>

        </section>
    );
}

export default CareerSections;