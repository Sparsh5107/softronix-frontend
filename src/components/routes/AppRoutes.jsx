import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AboutUs from '../sparsh-folder/pages/AboutUs/AboutUs'
import Home from '../sparsh-folder/pages/Home/Home'
import Contact from '../sparsh-folder/pages/ContactUS/Contact'
import Carrer from '../sparsh-folder/pages/Carrer/Carrer'
import BankFinanance from '../sparsh-folder/pages/Industries/Bank_Finance/BankFinanance'

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
                    </Route>

                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes