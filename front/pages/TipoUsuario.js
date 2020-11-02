import React from 'react'
import CardTipoUsuario from '../components/CardTipoUsuario'
import IconUsuarios from '../images/IconUsuario.png'
import ImgSolicitante from '../images/IconSolicitante.png'
import ImgDonante from '../images/IconDonante.png'
import '../styles/TipoUsuario.css'

const TipoUsuario = () => {
    return (
        <div className='usuarios'>
            <div className='content-usuarios container'>
                <div className='usuarios-top'>
                    <img id='left' src={IconUsuarios} alt=''/>
                    <h3>Seleccione su tipo de usuario</h3>
                </div>
                <div className='content-cardUsuarios'>
                    <CardTipoUsuario tipo='Solicitante' img={ImgSolicitante} />
                    <CardTipoUsuario tipo='Donante' img={ImgDonante} />
                </div>
                <div className='infoUsuario'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet convallis massa. Etiam ac lorem faucibus, faucibus diam eget, aliquet tellus. Vivamus porta purus tempus diam tempus porttitor.</p>
                </div>
            </div>
        </div>
    )
}

export default TipoUsuario
