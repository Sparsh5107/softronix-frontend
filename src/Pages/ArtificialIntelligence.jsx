import { AI_Cards } from "../assets/header/Cards";
import AIBanner from "../components/AI-Artificial_Intelligence/AIBanner";
import GetStart from "../components/Application Development/GetStart";
import OfferingsData from "../components/Application Development/OfferingsData";
import OverViewData from "../components/Application Development/OverViewData";
import Cards from "../components/common/Cards";

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
