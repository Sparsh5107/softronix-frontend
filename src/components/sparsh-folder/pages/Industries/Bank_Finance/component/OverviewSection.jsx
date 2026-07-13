import { financeData } from "../bankFinancedata";

const OverviewSection = () => {
    const { overview } = financeData;

    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#F7FAFD] via-white to-[#F7FAFD] py-20 lg:py-28">

            {/* Background Decoration */}
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#0077C8]/5 blur-3xl"></div>
            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#063B78]/5 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

                    {/* Left Content */}
                    <div>

                        <span className="inline-block rounded-full bg-[#EAF4FB] px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0077C8]">
                            {overview.tag}
                        </span>

                        <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-[#063B78] md:text-4xl">
                            {overview.title}
                        </h2>

                        <div className="mt-8 space-y-6">
                            {overview.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-[16px] leading-8 text-gray-600"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">

                        <div className="group overflow-hidden rounded-3xl bg-white p-3 shadow-xl ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                            <img
                                src={overview.image}
                                alt={overview.title}
                                className="h-65 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-105 sm:h-80 lg:h-95 lg:w-120"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default OverviewSection;