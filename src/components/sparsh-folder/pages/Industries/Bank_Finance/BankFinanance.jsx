import React from 'react'
import { financeData } from './bankFinancedata'
import HeroSection from '../component/HeroSection'
import OverviewSection from '../component/OverviewSection'
import SectorSection from '../component/SectorSection'
import FeaturesSection from '../component/FeaturesSection'
import WhySection from '../component/WhySection'


function BankFinanance() {
    return (
        <>
            <HeroSection data={financeData} />
            <OverviewSection data={financeData} />
            <SectorSection data={financeData} />
            <FeaturesSection data={financeData} />
            <WhySection data={financeData} />
        </>
    )
}

export default BankFinanance