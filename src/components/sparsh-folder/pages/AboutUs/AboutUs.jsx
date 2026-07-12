import React from 'react'
import AboutHero from './components/AboutHero'
import OverviewSection from './components/OverviewSection'
import MoreSection from './components/MoreSection'
import WhatWeDo from './components/WhatWeDo'
import CoreValues from './components/CoreValues'
import DiversitySection from './components/DiversitySection'

function AboutUs() {
    return (
        <>
            <AboutHero />
            <OverviewSection />
            <MoreSection />
            <WhatWeDo />
            <CoreValues />
            <DiversitySection />
        </>
    )
}

export default AboutUs