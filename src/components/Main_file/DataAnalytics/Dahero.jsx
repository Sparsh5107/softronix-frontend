import Hero from "../common/Hero";
const Dahero = () => {
  const BannerData = {
    image:
      "https://img.magnific.com/premium-photo/businesswoman-analyzing-with-pointing-business-graph-chart-stratagem_31965-288507.jpg?ga=GA1.1.784307569.1745000182&semt=ais_hybrid&w=740",
    title: "Data & analytics",
    alt: "Data Analytics.img",
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

export default Dahero;
