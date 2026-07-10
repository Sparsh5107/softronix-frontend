import { edTechCards } from "../assets/header/Cards";
import GetStart from "../components/Application Development/GetStart";
import OfferingsData from "../components/Application Development/OfferingsData";
import OverViewData from "../components/Application Development/OverViewData";
import Cards from "../components/common/Cards";
import EdteTechHero from "../components/EdTech/EdTechHero";

const Edtech=()=>{
    return(
        <>
        <EdteTechHero/>
        <OverViewData/>
        <OfferingsData/>
        <Cards data={edTechCards}/>
        <GetStart/>
        </>
    )
}


export default Edtech;