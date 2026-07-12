import { useState } from "react";
import { aboutData } from "../aboutData";

const WhatWeDo = () => {
    const { whatWeDo } = aboutData;


    const [active, setActive] = useState(0);

    return (
        <section className="bg-linear-to-b from-[#eef7ff] to-white py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <h2 className="mb-14 text-center text-3xl font-bold text-[#063B78] lg:text-4xl">
                    {whatWeDo.title}
                </h2>

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Circle Graphic */}
                    <div className="flex justify-center">
                        <div className="relative bg-blue-400 flex h-105 w-105 items-center justify-center rounded-full border border-blue-100  shadow-xl">

                            {/* Center Circle */}
                            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#063B78] text-center text-lg font-semibold text-white shadow-lg">
                                Sofftronix
                            </div>

                            {whatWeDo.circleItems.map((item, index) => {
                                const Icon = item.icon;

                                const positions = [
                                    "top-0 left-1/2 -translate-x-1/2",
                                    "bottom-12 left-0",
                                    "bottom-12 right-0",
                                ];

                                return (
                                    <div
                                        key={index}
                                        className={`absolute ${positions[index]}`}
                                    >
                                        <div className="group flex h-28 w-28 cursor-pointer flex-col items-center justify-center rounded-full border border-blue-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#0077C8] hover:shadow-xl">
                                            <Icon className="mb-2 h-9 w-9 text-[#0077C8] transition-transform duration-300 group-hover:scale-110" />

                                            <span className="text-center text-sm font-semibold text-[#063B78]">
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {whatWeDo.accordion.map((item, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-[#0077C8] hover:shadow-lg"
                            >
                                <button
                                    onClick={() => setActive(active === index ? -1 : index)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="text-lg font-semibold text-[#063B78]">
                                        {item.title}
                                    </span>

                                    <span
                                        className={`text-2xl font-light text-[#0077C8] transition-transform duration-300 ${active === index ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${active === index
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 text-[15px] leading-8 text-gray-600">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;