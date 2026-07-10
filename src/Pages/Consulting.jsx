import { consultCards } from "../assets/header/Cards";
import GetStart from "../components/Application Development/GetStart";
import OfferingsData from "../components/Application Development/OfferingsData";
import OverViewData from "../components/Application Development/OverViewData";
import Cards from "../components/common/Cards";
import ConsultHero from "../components/Consulting/ConsultHero";

const Consulting=()=>{

    
    return(
        <>
        <ConsultHero/>
        <OverViewData/>
        <OfferingsData/>
        <Cards data={consultCards}/>
        <GetStart/>
        </>
    )
}

export default Consulting;