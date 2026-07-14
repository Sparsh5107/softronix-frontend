
const HeroSection = ({ data }) => {
    const { hero } = data;


    return (
        <section className="relative overflow-hidden bg-[#063B78] pt-28 pb-20">

            {/* Background Layer 1 */}
            <div className="absolute inset-0 bg-[#063B78]" />

            {/* Background Layer 2 */}
            <div className="absolute -right-40 top-0 h-full w-[65%] -skew-x-12 bg-[#0A5AA6]/30" />

            {/* Background Layer 3 */}
            <div className="absolute -right-24 top-0 h-full w-[45%] -skew-x-12 bg-[#0077C8]/20" />

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2">

                    {/* Left */}
                    <div>
                        <h1 className="max-w-lg text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            {hero.title}
                        </h1>
                    </div>

                    {/* Right */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src={hero.image}
                                alt={hero.title}
                                className="h-65 w-full max-w-md object-cover transition duration-700 hover:scale-105 md:h-80 lg:h-95 lg:max-w-lg"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;