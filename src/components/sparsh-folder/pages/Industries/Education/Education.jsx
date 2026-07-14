import React from 'react'
import { educationData } from './educationdata'
import HeroSection from "../component/HeroSection"
import OverviewSection from '../component/OverviewSection'
import SectorSection from '../component/SectorSection'
import FeaturesSection from '../component/FeaturesSection'
import WhySection from '../component/WhySection'

function Education() {
    return (
        <>
            <HeroSection data={educationData} />
            <OverviewSection data={educationData} />
            <SectorSection data={educationData} />
            <FeaturesSection data={educationData} />
            <WhySection data={educationData} />


        </>
    )
}

export default Education