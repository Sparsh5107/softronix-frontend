const Hero = ({ image, title, alt }) => {
  return (
    <section className="w-full  px-3 sm:px-4   lg:px-10 mt-10">
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full " />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-3 object-fill">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
