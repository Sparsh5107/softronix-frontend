import { consultCards } from "../../../assets/header/Cards";
import GetStart from "../Application Development/GetStart";
import OfferingsData from "../Application Development/OfferingsData";
import OverViewData from "../Application Development/OverViewData";
import Cards from "../common/Cards";
import ConsultHero from "../Consulting/ConsultHero";

const Consulting = () => {
  return (
    <>
      <ConsultHero />
      <OverViewData />
      <OfferingsData />
      <Cards data={consultCards} />
      <GetStart />
    </>
  );
};

export default Consulting;
