import React from 'react'
import {Link} from 'react-router-dom'
import MsgReceived from '../components/MsgReceived'
import MsgSent from '../components/MsgSent'
import send from '../images/send.png'
import back from '../images/back.png'
import '../styles/Chat.css'

const Chat = () => {

    const handleSend = (e)=>{
        e.preventDefault()

        const input = document.getElementById('msg').value

        const contChat = document.querySelector('.cont-chat')
        const msg = document.createElement('div')
        msg.innerHTML =
        `
        <div class="msg sent">
            <p class="message sent">${input}</p>
        </div>
        `

        contChat.appendChild(msg)
        document.getElementById('form-chat').reset()
       
    }

    return (
        <div className='chat'>

            <div className="nav bg-red">
                <Link to='/solicitante/chatList'>
                <img src={back} alt="back" />
                </Link>
                <h2>Nombre usuario</h2>
            </div>
            

            <div className="col-2">
                <div class="cont-chat">
                    <MsgReceived msg='Think it is in there?' />
                    <MsgSent msg='All right. Let is get it!' />
                    <MsgReceived msg='Do you know what that thing can do to you?' />
                    <MsgSent msg="Yeah, it'll grind your bones for it is bread." />
                    <MsgSent msg='Yes, well, actually, that would be a giant.' />
                    <MsgReceived msg='No!' />
                    <MsgReceived msg="They'll shave your liver. Squeeze the jelly from your eyes!" />
                    <MsgSent msg='Back! Back, beast! Back! I warn ya!' />
                    <MsgReceived msg='This is the part where you run away.' />
                </div>
            </div>

            <form  id='form-chat'>
                <hr class="line" ></hr>
                <div class="cont-form">
                    <input id="msg" class="input medium black" placeholder="Write here..." autocomplete="off" type="text" required/>
                    <input onClick={handleSend} class="send" type="image" src={send} />
                </div>
            </form>
        </div>
    )
}

export default Chat
