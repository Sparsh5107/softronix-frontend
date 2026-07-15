import { DA } from "../../../assets/header/Cards";
import GetStart from "../Application Development/GetStart";
import OfferingsData from "../Application Development/OfferingsData";
import OverViewData from "../Application Development/OverViewData";
import Cards from "../common/Cards";
import Dahero from "../DataAnalytics/Dahero";

const DataAnalytics = () => {
  return (
    <>
      <Dahero />
      <OverViewData />
      <OfferingsData />
      <Cards data={DA} />
      <GetStart />
    </>
  );
};

export default DataAnalytics;
