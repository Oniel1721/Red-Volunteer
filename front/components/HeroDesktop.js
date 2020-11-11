import React from 'react'
import SvgHero from '../components/SvgHero'
import Login from './FacebookLogin'

const HeroDesktop = () => {
    return (
        <div className='heroDesktop bg-red'>
            <div className='content-heroDesktop'>
                <div className='left-heroDesktop'>
                    <h1 className='white'>INSERT APP NAME</h1>
                    <p className='desc pink'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit quis nunc varius imperdiet. Pellentesque porta lacus sed volutpat auctor. Aliquam eleifend molestie nulla. Integer vestibulum euismod tortor, vel tincidunt lacus.</p>
                    <div className='content-btn-desktop'>
                        <div className='btn bg-pink brown'>
                            <p>Continúa con Google</p>
                        </div>
                        <div className='btn line pink'>
                            <p>Continúa con Facebook</p>
                        </div>
                        <Login></Login>
                        {/* <h4 className='pink'>Saltar</h4> */}
                    </div>
                </div>
                <div className='right-heroDesktop'>
                    <SvgHero />
                </div>
            </div>
        </div>
    )
}

export default HeroDesktop
