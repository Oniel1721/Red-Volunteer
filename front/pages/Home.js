import React from 'react'
import Hero from '../components/Hero'
import HeroDesktop from '../components/HeroDesktop'
import Services from '../components/Services'
import Divider from '../components/Divider'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Login from '../components/FacebookLogin'

const Home = () => {
    return (
        <div>
            {/* <Login /> */}
            <Hero />
            <HeroDesktop />
            <Services />
            <Divider />
            <Team />
            <Footer />
        </div>
    )
}

export default Home
