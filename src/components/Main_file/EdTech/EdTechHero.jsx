import Hero from "../common/Hero";

const EdTechHero = () => {
  const BannerData = {
    image:
      "https://img.magnific.com/premium-photo/futuristic-classroom-with-students-using-virtual-reality-headsets-interactive-with-holographic_250678-3176.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",
    title: "EdTech",
    alt: "EdTech.img",
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

export default EdTechHero;
