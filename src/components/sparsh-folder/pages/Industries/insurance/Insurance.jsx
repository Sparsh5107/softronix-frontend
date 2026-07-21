import FeaturesSection from "../component/FeaturesSection";
import HeroSection from "../component/HeroSection";
import OverviewSection from "../component/OverviewSection";
import SectorSection from "../component/SectorSection";
import WhySection from "../component/WhySection";
import { insuranceData } from "./insurance";

const Insurance = () => {
  return (
    <>
     <HeroSection data={insuranceData}/>
      <OverviewSection data={insuranceData}/>
      <SectorSection data={insuranceData}/>
      <FeaturesSection data={insuranceData}/>
      <WhySection data={insuranceData}/>
    </>
  )
}

export default Insurance