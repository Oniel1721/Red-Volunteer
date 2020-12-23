import React,{useState} from 'react'
import servicio1 from '../images/servicio1.png'
import servicio2 from '../images/servicio2.png'
import servicio3 from '../images/servicio3.png'

const ServicesMobile = () => {

    const [service, setService] = useState([servicio1,'Solicitar Sangre','Podrás solicitar mediante peticiones el tipo de sangre que necesitas.'])

    const handleServices = ()=>{
        if(document.querySelector('input[id="s1"]:checked')){
            setService([servicio1,'Solicitar Sangre','Podrás solicitar mediante peticiones el tipo de sangre que necesitas.'])
        }
        if(document.querySelector('input[id="s2"]:checked')){
            setService([servicio2,'Ser Voluntario','Si lo que buscas es ayudar, podrás ofrecerte como donante voluntario.'])
        }
        if(document.querySelector('input[id="s3"]:checked')){
            setService([servicio3,'Contactos','Comunícate fácilmente con tu donador o solicitante mediante el chat de la aplicación.'])
        }
    }

    return (
        <div className='services-mobile'>
            <img src={service[0]} alt='servicio' />
            <div className='info-servicio'>

                <h2>{service[1]}</h2>
                <p>{service[2]}</p>

                <form id='botones-servicios' onChange={handleServices}>

                    <div className='wrap-option'>
                        <input type="radio" id="s1" name="gender"/>
                        <label htmlFor="s1">.</label>
                    </div>

                    <div className='wrap-option'>
                        <input type="radio" id="s2" name="gender" />
                        <label htmlFor="s2">.</label>
                    </div>

                    <div className='wrap-option'>
                        <input type="radio" id="s3" name="gender" />
                        <label htmlFor="s3">.</label>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ServicesMobile
