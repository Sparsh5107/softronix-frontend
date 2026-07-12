import { contactData } from "../contactUs_data";

const ContactSection = () => {
    const { hero, offices } = contactData;

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                {/* Heading */}
                <div className="mb-14 text-center">
                    <h2 className="text-3xl font-bold text-[#063B78] md:text-4xl">
                        {hero.title}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                        {hero.subtitle}
                    </p>
                </div>

                {/* Content */}
                <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Left Image */}
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src={hero.image}
                            alt={hero.title}
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="space-y-5">
                        {offices.map((office, index) => {
                            const Icon = office.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#0077C8] hover:shadow-lg"
                                >
                                    {/* Country */}
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Icon
                                                size={20}
                                                className="text-[#0077C8]"
                                                strokeWidth={2.2}
                                            />

                                            <h3 className="text-lg font-semibold text-[#063B78]">
                                                {office.country}, {office.city}
                                            </h3>
                                        </div>

                                        <span
                                            className={`${office.flag} h-5 w-7 overflow-hidden rounded-sm shadow-sm`}
                                        />
                                    </div>

                                    {/* Address */}
                                    <div className="space-y-1 text-[15px] leading-7 text-gray-600">
                                        {office.address.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>

                                    {/* Contact */}
                                    <div className="mt-5 border-t border-gray-100 pt-4 text-[15px] text-gray-700">
                                        <p>
                                            <span className="font-semibold text-[#063B78]">
                                                Email:
                                            </span>{" "}
                                            {office.email}
                                        </p>

                                        {office.phone && (
                                            <p className="mt-2">
                                                <span className="font-semibold text-[#063B78]">
                                                    Mobile No:
                                                </span>{" "}
                                                {office.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;