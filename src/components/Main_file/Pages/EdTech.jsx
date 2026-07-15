import { edTechCards } from "../../../assets/header/Cards";
import GetStart from "../Application Development/GetStart";
import OfferingsData from "../Application Development/OfferingsData";
import OverViewData from "../Application Development/OverViewData";
import Cards from "../common/Cards";
import EdTechHero from "../EdTech/EdTechHero";

const Edtech = () => {
  return (
    <>
      <EdTechHero />
      <OverViewData />
      <OfferingsData />
      <Cards data={edTechCards} />
      <GetStart />
    </>
  );
};

export default Edtech;
