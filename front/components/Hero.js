import React from 'react'
import SvgHero from '../components/SvgHero'

const Hero = () => {
    return (
        <div className='hero bg-red'>
            <div className='content-hero container'>
                <div className='hero-top bg-pink'>
                    <h1>APP NAME</h1>
                    <SvgHero/>
                </div>
                <div className='content-btn'>
                    <div className='btn bg-pink brown'>
                        <p>Continúa con Google</p>
                    </div>
                    <div className='btn line pink'>
                        <p>Continúa con Facebook</p>
                    </div>
                    <h4 className='pink'>Saltar</h4>
                </div>
            </div>
        </div>
    )
}

export default Hero