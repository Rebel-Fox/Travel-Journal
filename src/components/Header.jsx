import React from "react"
import HeaderIcon from '../assets/travel-journal.png'

export default function Header(){
    return(
        <header>
            <img src={HeaderIcon} alt="Travel Journal Icon" className="header-icon"/>
            <h3 className="header-title">My Travel Journal</h3>
        </header>
    )
}