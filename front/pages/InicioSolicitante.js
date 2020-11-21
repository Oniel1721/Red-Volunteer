import React from 'react'
import IconInicio from '../images/IconHomeOn.png'
import IconPeople from '../images/IconPeople.png'
import iconChat from '../images/IconChat.png'
import IconAjustes from '../images/IconSettings.png'
import FormSolicitar from '../components/FormSolicitar'
import ScreenPeticiones from '../components/ScreenPeticiones'
import DonadoresMatch from '../components/DonadoresMatch'
import CloseSession from '../components/CloseSession'
import '../styles/solicitante.css'
import session from '../logic/sessions'


const InicioSolicitante = () => {
    session.checkSession("","/login")
    const handleChoose = (e)=>{

        let arrayChoose = document.querySelectorAll('.select')

        arrayChoose.forEach((a)=>{
            a.classList.remove('on')
        })

        if(e.target.classList.contains('select')){
            e.target.classList.add('on')
        }else{
            e.target.parentElement.classList.add('on')
        }

        if(e.target.classList == '1'){
            document.querySelector('.screen-peticiones').classList.remove('hide')
            document.querySelector('.donadores-match').classList.add('hide')
            document.querySelector('.form-solicitar').classList.add('hide')
        }
        if(e.target.classList == '2'){
            document.querySelector('.screen-peticiones').classList.add('hide')
            document.querySelector('.donadores-match').classList.remove('hide')
            document.querySelector('.form-solicitar').classList.add('hide')
        }
        if(e.target.classList == '3'){
            document.querySelector('.screen-peticiones').classList.add('hide')
            document.querySelector('.donadores-match').classList.add('hide')
            document.querySelector('.form-solicitar').classList.remove('hide')
        }

    }

    return (
        <div className='solicitante'>
            <CloseSession></CloseSession>
            <div className='content-solicitante container'>

                <h1>Hola, Nombre!</h1>

                <div className='opciones'>
                    <div onClick={handleChoose} className='select 1 on'>
                        <h4 className='1'>Peticiones</h4>
                    </div>
                    <div onClick={handleChoose} className='select 2'>
                        <h4 className='2'>Donantes</h4>
                    </div>
                    <div onClick={handleChoose} className='select 3'>
                        <h4 className='3'>Solicitar</h4>
                    </div>
                </div>

                <ScreenPeticiones />
                <DonadoresMatch />
                <FormSolicitar />

                <div className='menu'>
                    <div className='content-menu container'>
                        <img src={IconInicio} alt='icon'/>
                        <img src={IconPeople} alt='icon'/>
                        <img src={iconChat} alt='icon'/>
                        <img src={IconAjustes} alt='icon'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default InicioSolicitante
