import React from "react";
import { visionMission } from "../data/visionMission";

function VisionMission() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-sky-100 py-24">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wider text-[#0077c8]">
                        {visionMission.badge}
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        {visionMission.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {visionMission.description}
                    </p>

                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-8 lg:grid-cols-2">

                    {/* Vision */}
                    <div className="group relative h-137.5 overflow-hidden rounded-3xl shadow-2xl">

                        <img
                            src={visionMission.vision.image}
                            alt={visionMission.vision.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 z-10 p-8 text-white">

                            <h3 className="text-3xl font-bold">
                                {visionMission.vision.title}
                            </h3>

                            <p className="mt-5 leading-8 text-gray-200">
                                {visionMission.vision.description}
                            </p>

                        </div>

                    </div>

                    {/* Mission */}
                    <div className="group relative h-137.5 overflow-hidden rounded-3xl shadow-2xl">

                        <img
                            src={visionMission.mission.image}
                            alt={visionMission.mission.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#0077c8]/90 via-black/60 to-transparent"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 z-10 p-8 text-white">

                            <h3 className="text-3xl font-bold">
                                {visionMission.mission.title}
                            </h3>

                            <p className="mt-5 leading-8 text-gray-200">
                                {visionMission.mission.description}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default VisionMission;