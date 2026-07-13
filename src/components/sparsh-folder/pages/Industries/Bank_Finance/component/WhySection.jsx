import { financeData } from "../bankFinancedata";

const WhySection = () => {
    const { whySofttronix } = financeData;

    return (
        <section className="relative overflow-hidden bg-white py-20 lg:py-24">

            {/* Background Accent */}
            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#0077C8]/5 blur-3xl"></div>
            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#063B78]/5 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">

                <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* Left Content */}
                    <div>

                        <span className="inline-flex rounded-full bg-[#EAF4FB] px-4 py-1.5 text-sm font-semibold tracking-wide text-[#0077C8]">
                            Why Choose Us
                        </span>

                        <h2 className="mt-5 text-3xl font-bold leading-tight text-[#063B78] md:text-4xl">
                            {whySofttronix.title}
                        </h2>

                        <div className="mt-7 space-y-5">
                            {whySofttronix.paragraphs.map((paragraph, index) => (
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
                    <div className="flex justify-center lg:justify-end">

                        <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                            <img
                                src={whySofttronix.image}
                                alt={whySofttronix.title}
                                className="h-75 w-full rounded-lg object-cover transition duration-700 group-hover:scale-105 lg:w-105"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhySection;