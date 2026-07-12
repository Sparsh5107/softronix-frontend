import { aboutData } from "../aboutData";

const MoreSection = () => {
    const { more } = aboutData;

    return (
        <section className="bg-[#F8FAFC] py-16 lg:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">

                <h2 className="mb-8 text-left text-3xl font-bold text-[#063B78] lg:text-4xl">
                    {more.title}
                </h2>

                <div className="space-y-8">
                    <p className="text-left text-[15px] leading-8 text-gray-600 lg:text-base">
                        {more.intro}
                    </p>

                    <p className="text-left text-[15px] leading-8 text-gray-600 lg:text-base">
                        {more.description}
                    </p>

                    <ul className="mx-auto max-w-4xl space-y-5">
                        {more.points.map((point, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0077C8]" />

                                <p className="text-[15px] leading-8 text-gray-700 lg:text-base">
                                    {point}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default MoreSection;