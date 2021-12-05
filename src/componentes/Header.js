import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


export default function Header({black }){

    return(
        <header className={black ? 'black' : ''}>
            <div className='logo'>
                <a href=''>
                    <img src='' alt=''/>
                </a>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li>Api Pexels</li>
                    
                </ul>
            </nav>

        </header>
    )
}