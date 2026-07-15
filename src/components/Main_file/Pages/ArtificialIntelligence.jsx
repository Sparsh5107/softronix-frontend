import { AI_Cards } from "../../../assets/header/Cards";
import AIBanner from "../AI-Artificial_Intelligence/AIBanner";
import GetStart from "../Application Development/GetStart";
import OfferingsData from "../Application Development/OfferingsData";
import OverViewData from "../Application Development/OverViewData";
import Cards from "../common/Cards";

const ArtificialIntelligence = () => {
  return (
    <>
      <AIBanner />
      <OverViewData />
      <OfferingsData />
      <Cards data={AI_Cards} />
      <GetStart />
    </>
  );
};

export default ArtificialIntelligence;
