import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import IconInicio from '../images/IconHome.png'
import IconPeople from '../images/IconPeople.png'
import iconChat from '../images/IconChatOn.png'
import IconAjustes from '../images/IconSettings.png'
import '../styles/solicitante.css'
import CardChat from '../components/CardChat'

const ChatList = () => {

    // if(!localStorage.getItem("userID")){
    //     return(
    //         <Redirect to="/signup"></Redirect>
    //     )
    // }
    
    return (
        <div className='chat-list'>
            <h2>Chats</h2>
            <div className='content-chat-list'>
                <p>Usuarios aceptados</p>
                <Link to='/solicitante/chatUser'>
                <CardChat sangre='A+' nombre='Oscar Cañellas'/>
                </Link>
                <CardChat sangre='B-' nombre='David Prins'/>
                <CardChat sangre='O+' nombre='Ardis Svarenieks'/>
                <CardChat sangre='AB+' nombre='Jacob Mourujärvi'/>
                <CardChat sangre='O-' nombre='Patryk Fabrowski'/>
                <div className='menu'>
                    <div className='content-menu container'>
                        <Link to='/solicitante'>
                        <img src={IconInicio} alt='icon'/>
                        </Link>
                        <img src={IconPeople} alt='icon'/>
                        <img src={iconChat} alt='icon'/>
                        <Link to='/solicitante/settings'>
                        <img src={IconAjustes} alt='icon'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatList
