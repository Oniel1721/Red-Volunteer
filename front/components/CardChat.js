import React from 'react'

const CardChat = ({sangre,nombre}) => {
    return (
        <div className='card-chat'>
            <div className='chat-sangre'>
                <h3>{sangre}</h3>
            </div>
            <p>{nombre}</p>
        </div>
    )
}

export default CardChat
