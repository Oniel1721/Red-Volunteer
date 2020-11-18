import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/login-local">Login</Link>
            <Link to="/signup-local">Signup</Link>
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
