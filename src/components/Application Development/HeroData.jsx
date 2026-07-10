import Hero from "../common/Hero";

const HeroData = () => {
  const BannerData = {
    image:
      "https://img.magnific.com/free-photo/operation-process-performance-development-icon_53876-16541.jpg?ga=GA1.1.784307569.1745000182&semt=ais_hybrid&w=740",
    title: "Application Development & Management",
    alt: "ADM.img",
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

export default HeroData;
