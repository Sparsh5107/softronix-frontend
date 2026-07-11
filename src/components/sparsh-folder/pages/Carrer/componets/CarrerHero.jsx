import React from "react";
import { careerHero } from "../careerdata";

function CareerHero() {
    return (<>
        <section className="relative h-[75vh] w-full overflow-hidden">

            {/* Background Image */}
            <img
                src={careerHero.image}
                alt={careerHero.title}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Content */}
            <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">

                <div className="max-w-2xl">

                    <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                        {careerHero.title}
                    </h1>

                </div>

            </div>

        </section>
        <section className="bg-[#083b78] py-8">

            <div className="mx-auto max-w-4xl px-6 text-center">

                <h2 className="text-4xl font-bold text-white">
                    {careerHero.quote.title}
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/90">
                    {careerHero.quote.description}
                </p>

            </div>

        </section>

    </>

    );
}

export default CareerHero;