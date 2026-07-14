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