import { aboutData } from "../aboutdata";

const AboutHero = () => {
    const { hero } = aboutData;

    return (
        <section className="py-6 lg:py-8">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-xl">
                <img
                    src={hero.image}
                    alt={hero.title}
                    className="h-70 w-full object-cover sm:h-90 lg:h-130"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#063B78]/85 via-[#063B78]/55 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-2xl px-6 sm:px-10 lg:px-16">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                            {hero.subtitle}
                        </p>

                        <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            {hero.title}
                        </h1>

                        <p className="max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                            {hero.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;