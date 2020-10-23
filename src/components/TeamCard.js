import React from 'react'
import iconMail from '../images/mail.png'
import iconGit from '../images/git.png'

const TeamCard = ({img,name,job,mail,git}) => {
    return (
        <div className='team-card'>
            <img className='picture' src={img} alt='team'/>
            <div className='info-team'>
                <h3>{name}</h3>
                <p>{job}</p>
                <div className='media'>
                    <a href={mail} target="_blank">
                        <img src={iconMail} alt='mail'/>
                    </a>
                    <a href={git} target="_blank">
                        <img src={iconGit} alt='git'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
