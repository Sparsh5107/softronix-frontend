import FeaturesSection from "../component/FeaturesSection";
import HeroSection from "../component/HeroSection";
import OverviewSection from "../component/OverviewSection";
import SectorSection from "../component/SectorSection";
import WhySection from "../component/WhySection";
import { manufacturingData } from "./manufact";

const ManuFact = () => {
  return (
    <>
      <HeroSection data={manufacturingData} />
      <OverviewSection data={manufacturingData} />
      <SectorSection data={manufacturingData} />
      <FeaturesSection data={manufacturingData} />
      <WhySection data={manufacturingData} />
    </>
  );
};

export default ManuFact;
