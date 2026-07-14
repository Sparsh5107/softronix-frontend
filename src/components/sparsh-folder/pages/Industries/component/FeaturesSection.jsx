
const FeaturesSection = ({ data }) => {
    const { features } = data;

    return (
        <section className="bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-5xl space-y-14 px-6">

                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`grid items-center gap-4 lg:grid-cols-2 ${feature.imageLeft
                            ? ""
                            : "lg:[&>*:first-child]:order-2"
                            }`}
                    >

                        {/* Image */}
                        <div className="flex justify-center">
                            <div className="overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="h-72.5 w-107.5 object-cover transition duration-500 hover:scale-[1.04]"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        {/* Content */}
                        <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:p-10">

                            <h2 className="text-[30px] font-bold leading-tight text-[#063B78]">
                                {feature.title}
                            </h2>

                            <div className="mt-5 h-1 w-16 rounded-full bg-[#0077C8]" />

                            <p className="mt-6 text-[15px] leading-8 text-gray-600">
                                {feature.description}
                            </p>

                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default FeaturesSection;