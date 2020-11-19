import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import HeroDesktop from '../components/HeroDesktop'
import Services from '../components/Services'
import Divider from '../components/Divider'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Login from '../components/FacebookLogin'
import session from '../logic/sessions'

const Home = () => {
    session.checkSession("/solicitante")
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
