import Hero from "../common/Hero";

const AIBanner = () => {
  const BannerData = {
    image:
      "https://img.magnific.com/premium-vector/artificial-intelligence-abstract-geometric-human-head-background_41981-1338.jpg?ga=GA1.1.2059689567.1750410890&semt=ais_hybrid&w=740",
    title: "Artificial Intelligence",
    alt: "AI.img",
  };
  return (
    <>
      <Hero
        image={BannerData.image}
        title={BannerData.title}
        alt={BannerData.alt}
      />
    </>
  );
};

export default AIBanner;
