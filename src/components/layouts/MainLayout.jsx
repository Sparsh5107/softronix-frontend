import React from 'react'
import Navbar from '../sparsh-folder/NavBar_component/Navbar'
import Footer from '../sparsh-folder/Footer_Component/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default MainLayout