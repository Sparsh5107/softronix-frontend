import Hero from "../common/Hero";

const SpeHerodata = () => {
  const BannerData = {
    image:
      "https://img.magnific.com/premium-photo/busy-engineering-facility-diverse-group-engineers-technicians-working-design-industrial-engine-prototype-specialists-talk-meetings-work-with-drawings-use-computers_861143-5922.jpg?ga=GA1.1.784307569.1745000182&semt=ais_hybrid&w=740",
    title: "Software Product Engineering",
    alt: "Software Product Enginnering.img",
  };
  return (
    <Hero
      image={BannerData.image}
      title={BannerData.title}
      alt={BannerData.alt}
    />
  );
};

export default SpeHerodata;
