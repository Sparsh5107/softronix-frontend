
// import { SpeCardsarr } from "../assets/Cards-Software Product/Cards";
import { SpeCardsarr } from "../assets/header/Cards";
import GetStart from "../components/Application Development/GetStart";
import OfferingsData from "../components/Application Development/OfferingsData";
import OverViewData from "../components/Application Development/OverViewData";
import Cards from "../components/common/Cards";
import SpeHerodata from "../components/Software-Product/SpeHerodata";

const SoftwareProduct = () => {

  return (
    <>
      <SpeHerodata />
      <OverViewData/>
      <OfferingsData/>
      <Cards data={SpeCardsarr}/>
      <GetStart/>
    </>
  );
};

export default SoftwareProduct;
