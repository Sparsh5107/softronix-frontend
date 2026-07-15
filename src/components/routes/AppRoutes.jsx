import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AboutUs from '../sparsh-folder/pages/AboutUs/AboutUs'
import Home from '../sparsh-folder/pages/Home/Home'
import Contact from '../sparsh-folder/pages/ContactUS/Contact'
import Carrer from '../sparsh-folder/pages/Carrer/Carrer'
import BankFinanance from '../sparsh-folder/pages/Industries/Bank_Finance/BankFinanance'
import HealthCare from '../sparsh-folder/pages/Industries/HealthCare/HealthCare'
import Education from '../sparsh-folder/pages/Industries/Education/Education'
import TravelLogistic from '../sparsh-folder/pages/Industries/TravelLogistic/TravelLogistic'

import ADM from '../Main_file/Pages/ADM'
import Consulting from '../Main_file/Pages/Consulting'
import SoftwareProduct from '../Main_file/Pages/SoftwareProduct'
import DataAnalytic from '../Main_file/Pages/DataAnalytics'
import ArtificialIntelligence from '../Main_file/Pages/ArtificialIntelligence'
import EdTech from '../Main_file/Pages/EdTech'

function AppRoutes() {
    return (
        <>

            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="career" element={<Carrer />} />
                    <Route path="contact" element={<Contact />} />

                    {/* Services */}

                    <Route path="services">
                        <Route path="application-development" element={<ADM />} />
                        <Route path="consulting" element={<Consulting />} />
                        <Route path="software-engineering" element={<SoftwareProduct />} />
                        <Route path="data-analytics" element={<DataAnalytic />} />
                        <Route path="artificial-intelligence" element={<ArtificialIntelligence />} />
                        <Route path="edtech" element={<EdTech />} />
                    </Route>

                    {/* Industries */}
                    <Route path="industries">
                        <Route path="banking-financial-services" element={<BankFinanance />} />
                        <Route path="healthcare" element={<HealthCare />} />
                        <Route path="education" element={<Education />} />
                        <Route path="travel-logistics" element={<TravelLogistic />} />
                    </Route>

                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes