import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../navData";

const ServicesMenu = () => {
    const midpoint = Math.ceil(services.length / 2);

    const firstColumn = services.slice(0, midpoint);
    const secondColumn = services.slice(midpoint);

    const Column = ({ data }) => (
        <div className="divide-y divide-gray-100">
            {data.map((item) => (
                <Link
                    key={item.id}
                    to={item.path}
                    className="
            group
            flex
            items-center
            justify-between
            py-4
            text-[15px]
            text-gray-700
            transition-all
            duration-300
            hover:text-[#0077c8]
            hover:pl-2
          "
                >
                    <span>{item.title}</span>

                    <ArrowRight
                        size={16}
                        className="
              opacity-0
              -translate-x-2
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-x-0
            "
                    />
                </Link>
            ))}
        </div>
    );

    return (
        <div
            className="
        overflow-hidden
        rounded-2xl
        border border-gray-100
        bg-white
        shadow-2xl
      "
        >
            <div className="grid grid-cols-[320px_1fr_1fr] gap-10 p-8">
                {/* Left Card */}
                <div
                    className="
            flex
            flex-col
            rounded-xl
            bg-linear-to-br
            from-[#0026ff]
            to-[#55aaff]
            p-8
            text-white
          "
                >
                    <span className="text-sm uppercase tracking-[3px] text-blue-200">
                        Services
                    </span>

                    <h2 className="mt-3 text-3xl font-bold leading-tight">
                        Digital
                        <br />
                        Services
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-blue-100">
                        We build scalable software, modern digital products,
                        cloud solutions, AI-powered applications, and enterprise
                        systems that help businesses grow.
                    </p>

                    <button
                        className="
              mt-auto
              w-fit
              rounded-md
              border border-white
              px-5
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#005BAA]
            "
                    >
                        Learn More
                    </button>
                </div>

                {/* Service Columns */}
                <Column data={firstColumn} />
                <Column data={secondColumn} />
            </div>
        </div>
    );
};

export default ServicesMenu;