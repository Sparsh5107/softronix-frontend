import FeaturesSection from "../component/FeaturesSection";
import HeroSection from "../component/HeroSection";
import OverviewSection from "../component/OverviewSection";
import SectorSection from "../component/SectorSection";
import WhySection from "../component/WhySection";
import { highTechData } from "./Hightech";

const HighTech = () => {
  return (
    <>
     <HeroSection  data={highTechData} />
      <OverviewSection  data={highTechData}/>
      <SectorSection data={highTechData} />
      <FeaturesSection  data={highTechData}/>
      <WhySection  data={highTechData}/>
    </>
  )
}

export default HighTech