import { aboutData } from "../aboutData";

const CoreValues = () => {
    const { coreValues } = aboutData;

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <h2 className="mb-14 text-center text-3xl font-bold text-[#063B78] lg:text-4xl">
                    {coreValues.title}
                </h2>

                <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
                    {coreValues.values.map((value, index) => {
                        const Icon = value.icon;

                        return (
                            <div
                                key={index}
                                className="group flex cursor-pointer flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
                            >
                                <Icon className="mb-5 h-16 w-16 text-[#0077C8] transition-all duration-300 group-hover:scale-110 group-hover:text-[#063B78]" />

                                <h3 className="text-lg font-medium text-[#063B78]">
                                    {value.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;