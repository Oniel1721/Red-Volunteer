import React from 'react'
import Hero from '../components/Hero'
import HeroDesktop from '../components/HeroDesktop'
import Services from '../components/Services'
import Divider from '../components/Divider'
import Team from '../components/Team'
import Footer from '../components/Footer'
import InicioSolicitante from './InicioSolicitante'

const Home = () => {
    return (
        <div>
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
