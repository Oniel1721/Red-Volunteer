import React from 'react'
import ServicesCard from '../components/ServicesCard'
import IconService1 from '../images/IconService1.png'
import IconService2 from '../images/IconService2.png'
import IconService3 from '../images/IconService3.png'
import IconService4 from '../images/IconService4.png'
import IconService5 from '../images/IconService5.png'
import IconService6 from '../images/IconService6.png'

const Services = () => {
    return (
        <div className='services'>
            <div className='content-services container center'>
                <h2>Servicios Disponibles</h2>
                <p className='sub gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit quis nunc varius imperdiet. Pellentesque porta.</p>
                <div className='content-services-card'>
                    <ServicesCard img={IconService1} title='Solicitar Sangre'description='Podrás solicitar mediante peticiones el tipo de sangre que necesitas.'/>
                    <ServicesCard img={IconService2} title='Ser Voluntario'description='Si lo que buscas es ayudar, podrás ofrecerte como donante voluntario.'/>
                    <ServicesCard img={IconService3} title='Control Médico'description='Si eres donantes, podrás llevar el control médico de tus donaciones.'/>
                    <ServicesCard img={IconService4} title='Chatear'description='Si encuentras la sangre que necesitas podrás establecer contacto con el donante.'/>
                    <ServicesCard img={IconService5} title='Notificaciones'description='Te llegarán notificaciones avisándote de que ya hay donantes disponibles.'/>
                    <ServicesCard img={IconService6} title='Solicitar Sangre'description='Podrás solicitar mediante peticiones el tipo de sangre que necesitas.'/>
                </div>
            </div>
        </div>
    )
}

export default Services
