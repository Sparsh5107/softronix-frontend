import FeaturesSection from "../component/FeaturesSection";
import HeroSection from "../component/HeroSection";
import OverviewSection from "../component/OverviewSection";
import SectorSection from "../component/SectorSection";
import WhySection from "../component/WhySection";
import { hospitalityData } from "./hospitality";

const Hospitality = () => {
  return (
    <>
      <HeroSection data={hospitalityData} />
      <OverviewSection data={hospitalityData} />
      <SectorSection  data={hospitalityData} />
      <FeaturesSection  data={hospitalityData} />
      <WhySection  data={hospitalityData}/>
    </>
  );
};

export default Hospitality;
