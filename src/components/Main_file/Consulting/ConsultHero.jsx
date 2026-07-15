import Hero from "../common/Hero";



const ConsultHero = () => {
  const BannerData = {
    image:
      "https://img.magnific.com/premium-photo/business-documents-office-table-with-smart-phone-calculator-digital-tablet-graph-business-with-social-network-diagram-two-colleagues-discussing-data-working-office_71455-164.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",
    title: "Consulting",
    alt: "Consulting.img",
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

export default ConsultHero;
