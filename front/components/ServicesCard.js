import React from 'react'

const ServicesCard = ({img,title,description}) => {
    return (
        <div className='services-card'>
            <img src={img} alt='card'/>
            <h4>{title}</h4>
            <p className='gray'>{description}</p>
        </div>
    )
}

export default ServicesCard
