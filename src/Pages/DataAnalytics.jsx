import { DA } from "../assets/header/Cards";
import GetStart from "../components/Application Development/GetStart";
import OfferingsData from "../components/Application Development/OfferingsData";
import OverViewData from "../components/Application Development/OverViewData";
import Cards from "../components/common/Cards";
import Dahero from "../components/DataAnalytics/Dahero";

const DataAnalytics =()=>{

    return(
        <>
        <Dahero/>
        <OverViewData/>
        <OfferingsData/>
        <Cards data={DA}/>
        <GetStart/>
        </>
    )
}

export default DataAnalytics;