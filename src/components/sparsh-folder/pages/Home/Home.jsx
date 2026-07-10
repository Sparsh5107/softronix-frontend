import React from 'react'
import Hero from './components/Hero'
import About_Home from './components/About_Home'
import Services_Home from './components/Services_Home'
import VisionMission from './components/VisionMission'

function Home() {
    return (
        <>
            <Hero />
            <About_Home />
            <VisionMission />
            <Services_Home />
        </>
    )
}

export default Home