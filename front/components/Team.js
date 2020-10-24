import React from 'react'
import TeamCard from './TeamCard'
import team1 from '../images/team1.png'

const Team = () => {
    return (
        <div className='team'>
            <div className='content-team container center'>
                <h2>Nuestro equipo</h2>
                <p className='sub gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit quis nunc varius imperdiet. Pellentesque porta.</p>
                <div className='content-team-card'>
                    <TeamCard img={team1} name='Oniel Santos' job='Backend and manager' git='https://github.com/Oniel1721'/>
                    <TeamCard img={team1} name='Juan López' job='Frontend and designer' git='https://github.com/JuanGabriel2960'/>
                    <TeamCard img={team1} name='Josué Zorilla' job='Backend developer' git='https://github.com/Josuezo23dev'/>
                    <TeamCard img={team1} name='Miguel Mateo' job='Full-stack developer' git='https://github.com/miguel007TMM2'/>
                    <TeamCard img={team1} name='Stacey Díaz' job='Frontend and designer' git='https://github.com/iamstacey'/>
                    <TeamCard img={team1} name='Carlos Espinal' job='DevOps' git='https://github.com/cjespinal'/>
                </div>
            </div>
        </div>
    )
}

export default Team
