import { aboutData } from "../aboutData";

const DiversitySection = () => {
    const { diversity } = aboutData;

    return (
        <section className="bg-black/15 py-16 lg:py-24">
            <div className="mx-auto max-w-4xl px-4 md:px-6">
                <h2 className="mb-12 text-center text-3xl font-bold text-[#063B78] lg:text-4xl">
                    {diversity.title}
                </h2>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 ">
                    {diversity.cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl"
                        >
                            {/* Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/15 transition-all duration-500 group-hover:bg-black/35" />

                            {/* Title */}
                            <div className="absolute bottom-0 left-0 flex w-full items-end justify-center bg-linear-to-t from-black/90 via-black/45 to-transparent px-5 pb-10 pt-16 transition-all duration-500 group-hover:items-center group-hover:pb-0">
                                <div className="text-center transition-all duration-500 group-hover:-translate-y-4">
                                    <h3 className="text-lg font-semibold text-white">
                                        {card.title}
                                    </h3>

                                    <div className="mx-auto mt-3 h-0.5 w-0 bg-[#0077C8] transition-all duration-500 group-hover:w-14" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiversitySection;