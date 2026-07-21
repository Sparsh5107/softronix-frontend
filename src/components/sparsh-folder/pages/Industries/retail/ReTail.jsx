import FeaturesSection from "../component/FeaturesSection";
import HeroSection from "../component/HeroSection";
import OverviewSection from "../component/OverviewSection";
import SectorSection from "../component/SectorSection";
import WhySection from "../component/WhySection";
import { retailData } from "./retail";

const ReTail = () => {
  return (
    <>
      <HeroSection data={retailData} />
      <OverviewSection data={retailData} />
      <SectorSection data={retailData} />
      <FeaturesSection data={retailData} />
      <WhySection data={retailData} />
    </>
  );
};

export default ReTail;
