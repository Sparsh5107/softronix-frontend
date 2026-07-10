import { industries } from "../data/industries";

export default function IndustriesHome() {
    return (
        <section className="py-16 bg-neutral-50">

            <div className="max-w-5xl mx-auto px-5">

                {/* Canvas Frame */}
                <div
                    className="
                    rounded-4x1
                    border
                    border-neutral-200
                    bg-white
                    p-3
                    shadow-xl
                    "
                >

                    {/* Header */}
                    <div className="text-center px-6 pt-8 pb-10">
                        <span
                            className="
                            inline-flex
                            rounded-full
                            bg-blue-50
                            px-4 py-1.5
                            text-xs
                            font-semibold
                            text-blue-600
                            "
                        >
                            {industries.badge}
                        </span>

                        <h2
                            className="
                            mt-4
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-neutral-900
                            "
                        >
                            {industries.title}
                        </h2>

                        <p
                            className="
                            mt-3
                            max-w-2xl
                            mx-auto
                            text-sm
                            md:text-base
                            text-neutral-600
                            "
                        >
                            {industries.description}
                        </p>
                    </div>


                    {/* Compact Bento */}
                    <div
                        className="
                        grid
                        grid-cols-2
                        lg:grid-cols-4
                        auto-rows-37.5
                        gap-2
                        overflow-hidden
                        rounded-3x1
                        "
                    >

                        {industries.cards.map((item, index) => (
                            <div
                                key={item.title}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-xl
                                    ${index === 0
                                        ? "col-span-2 row-span-2"
                                        : index === 3
                                            ? "col-span-2"
                                            : ""
                                    }
                                `}
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-110
                                    "
                                />


                                {/* overlay */}
                                <div
                                    className="
                                    absolute
                                    inset-0
                                    bg-linear-to-t
                                    from-black/80
                                    via-black/20
                                    to-transparent
                                    "
                                />


                                {/* text */}
                                <div
                                    className="
                                    absolute
                                    inset-0
                                    flex
                                    flex-col
                                    justify-end
                                    p-4
                                    text-white
                                    "
                                >

                                    <h3
                                        className="
                                        text-lg
                                        font-bold
                                        translate-y-5
                                        transition
                                        duration-500
                                        group-hover:translate-y-0
                                        "
                                    >
                                        {item.title}
                                    </h3>


                                    <p
                                        className="
                                        mt-2
                                        text-xs
                                        text-white/80
                                        line-clamp-2
                                        opacity-0
                                        translate-y-5
                                        transition-all
                                        duration-500
                                        group-hover:opacity-100
                                        group-hover:translate-y-0
                                        "
                                    >
                                        {item.description}
                                    </p>


                                    <a
                                        href={item.link}
                                        className="
                                        mt-3
                                        w-fit
                                        rounded-full
                                        bg-white
                                        px-4
                                        py-1.5
                                        text-xs
                                        font-semibold
                                        text-black
                                        opacity-0
                                        translate-y-5
                                        transition-all
                                        duration-500
                                        group-hover:opacity-100
                                        group-hover:translate-y-0
                                        "
                                    >
                                        View →
                                    </a>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}