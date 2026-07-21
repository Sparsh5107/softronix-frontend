import FeaturesSection from "../component/FeaturesSection";
import HeroSection from "../component/HeroSection";
import OverviewSection from "../component/OverviewSection";
import SectorSection from "../component/SectorSection";
import WhySection from "../component/WhySection";
import { publicServicesData } from "./Publicservice";

const PublicService = () => {
  return (
    <>
      <HeroSection  data={publicServicesData} />
      <OverviewSection  data={publicServicesData}/>
      <SectorSection data={publicServicesData} />
      <FeaturesSection  data={publicServicesData}/>
      <WhySection  data={publicServicesData}/>
    </>
  );
};

export default PublicService;
