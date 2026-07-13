import { financeData } from "../bankFinancedata";

const SectorSection = () => {
    const { sectors } = financeData;

    return (
        <section className="relative overflow-hidden bg-white py-20 lg:py-24">

            {/* Background Decoration */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0077C8]/5 blur-3xl"></div>
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#063B78]/5 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mb-14 text-center">

                    <h2 className="text-3xl font-bold text-[#063B78] md:text-4xl">
                        {sectors.title}
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#0077C8]"></div>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

                    {sectors.items.map((sector, index) => {
                        const Icon = sector.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-2xl border border-gray-200 bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0077C8] hover:shadow-xl"
                            >

                                {/* Icon */}
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F2F8FC] transition-all duration-300 group-hover:bg-[#0077C8]">

                                    <Icon
                                        size={34}
                                        strokeWidth={2}
                                        className="text-[#0077C8] transition-all duration-300 group-hover:text-white"
                                    />

                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-lg font-semibold leading-7 text-[#063B78] transition-colors duration-300 group-hover:text-[#0077C8]">
                                    {sector.title}
                                </h3>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default SectorSection;