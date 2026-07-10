import Overview from "../common/Overview";

const OverViewData = () => {
  const overviewinfo = {
    heading: "Overview of Our Service",
    para: "We offer top-quality services designed to meet your needs and help you achieve your goals. With years of experience and a customer-centric approach, we ensure that every project we undertake is a success.",
    image:
      "https://img.magnific.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg?ga=GA1.1.739302704.1750409440&semt=ais_hybrid&w=740",

    alt: "Service Overview",
  };

  const points = [
    "Comprehensive solutions tailored to your requirements.",
    "Expert team with industry-leading expertise.",
    "Focus on delivering measurable results.",
    "Commitment to quality and customer satisfaction.",
  ];

  return (
    <>
      <Overview
        title={overviewinfo.heading}
        para={overviewinfo.para}
        points={points}
        img={overviewinfo.image}
        alt={overviewinfo.alt}
      />
    </>
  );
};

export default OverViewData;
