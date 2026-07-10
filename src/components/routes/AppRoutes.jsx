import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AboutUs from '../sparsh-folder/pages/AboutUs/AboutUs'
import Home from '../sparsh-folder/pages/Home/Home'

function AppRoutes() {
    return (
        <>

            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutUs />} />
                </Route>
            </Routes>




        </>
    )
}

export default AppRoutes