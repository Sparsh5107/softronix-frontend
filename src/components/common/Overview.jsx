import WhySoftData from "../Application Development/WhySoftData";
import Offerings from "./Offerings";

const Overview = ({ title, para, points, img, alt }) => {
  return (
    <section className="bg-gray-200  mx-3 px-3 sm:px-6 lg:px-10   py-10 sm:py-12 lg:py-16  sm:mx-4 lg:mx-10">
      <div className=" max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 mb-8">
          {/* left Content */}
          <div className="w-full lg:w-2/3   mt-6">
            <h2 className=" text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-4 sm:px-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg sm:px-4 text-gray-500 mb-6 sm:mb-8  ">
              {para}
            </p>

            <ul className="pl-3 space-y-2.5 sm:px-4">
              {points.map((point, index) => (
                <li
                  className="text-gray-600 list-disc sm:text-base "
                  key={index}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right image */}
          <div className=" w-full sm:pt-4 sm:w-3/4 lg-1/3  rounded-2xl shadow-lg overflow-hidden">
            <img className=" w-full  rounded-2xl" src={img} alt={alt} />
          </div>
        </div>

        {/* Uses The WhySoftData Component */}
        {/* <WhySoftData/> */}
        <WhySoftData />
      </div>
    </section>
  );
};

export default Overview;
