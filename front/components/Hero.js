import React from 'react'
import SvgHero from '../components/SvgHero'
import LoginG from './GoogleLogin'
import LoginFB from './FacebookLogin'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero bg-red'>
            <div className='content-hero container'>
                <div className='hero-top bg-pink'>
                    <h1>APP NAME</h1>
                    <SvgHero/>
                </div>
                <div>
                    <LoginG></LoginG>
                </div>
                <div className='content-btn'>
                    <LoginFB></LoginFB>
                    <Link to="/signup">
                    <div className='btn bg-pink brown'>
                        <p>Comenzar</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
