import { SpeCardsarr } from "../../../assets/header/Cards";
import GetStart from "../Application Development/GetStart";
import OfferingsData from "../Application Development/OfferingsData";
import OverViewData from "../Application Development/OverViewData";
import Cards from "../common/Cards";
import SpeHerodata from "../Software-Product/SpeHerodata";

const SoftwareProduct = () => {
  return (
    <>
      <SpeHerodata />
      <OverViewData />
      <OfferingsData />
      <Cards data={SpeCardsarr} />
      <GetStart />
    </>
  );
};

export default SoftwareProduct;
