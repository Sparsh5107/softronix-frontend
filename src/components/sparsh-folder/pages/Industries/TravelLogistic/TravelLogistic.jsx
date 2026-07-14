import React from 'react'
import { travelLogisticsData } from './travellogistic_data'
import HeroSection from '../component/HeroSection'
import OverviewSection from '../component/OverviewSection'
import SectorSection from '../component/SectorSection'
import FeaturesSection from '../component/FeaturesSection'
import WhySection from '../component/WhySection'
function TravelLogistic() {
    return (<>

        <HeroSection data={travelLogisticsData} />
        <OverviewSection data={travelLogisticsData} />
        <SectorSection data={travelLogisticsData} />
        <FeaturesSection data={travelLogisticsData} />
        <WhySection data={travelLogisticsData} />

    </>

    )
}

export default TravelLogistic