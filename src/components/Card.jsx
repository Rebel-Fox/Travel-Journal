import React from 'react'
import locationIcon from '../assets/location.png'

export default function Card(props) {
    return (
        <section className='card'>
            <img src={`./src/assets/${props.image}`} alt={props.title} className='location-image'/>
            <div className="content">
                <div className='location-details'>
                    <img src={locationIcon} alt='location icon' className='location-icon' />
                    <span className='location'>{props.location}</span>
                    <a href={props.googleMapsUrl} target='_blank' className='google-maps-url'>View on Google Maps</a>
                </div>
                <h2 className='title'>{props.title}</h2>
                <p className='date'>{props.startDate}-{props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>

        </section>
    )
}