import { aboutData } from "../aboutData";

const OverviewSection = () => {
    const { overview } = aboutData;

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

                {/* Left Content */}
                <div>
                    <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0077C8]">
                        {overview.badge}
                    </span>

                    <h2 className="mt-5 text-3xl font-bold leading-tight text-[#063B78] lg:text-4xl">
                        {overview.title}
                    </h2>

                    <div className="mt-8 space-y-6">
                        {overview.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-[15px] leading-8 text-gray-600"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="overflow-hidden rounded-3xl shadow-xl">
                    <img
                        src={overview.image}
                        alt={overview.title}
                        className="h-full w-auto object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

            </div>
        </section>
    );
};

export default OverviewSection;