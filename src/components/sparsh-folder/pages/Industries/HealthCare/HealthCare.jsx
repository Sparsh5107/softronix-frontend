import React from 'react'
import { healthcareData } from './healthcare_data'
import HeroSection from "../component/HeroSection"
import OverviewSection from '../component/OverviewSection'
import SectorSection from '../component/SectorSection'
import FeaturesSection from '../component/FeaturesSection'
import WhySection from '../component/WhySection'
function HealthCare() {
    return (
        <>

            <HeroSection data={healthcareData} />
            <OverviewSection data={healthcareData} />
            <SectorSection data={healthcareData} />
            <FeaturesSection data={healthcareData} />
            <WhySection data={healthcareData} />


        </>
    )
}

export default HealthCare