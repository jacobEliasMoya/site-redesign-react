import React from 'react'
import Logo from './images/logo.png';

export default function Overlay() {
    return (
        <div className='onloadoverlay'>
            <div className="outer1">
                <img alt="overlay logo" src={Logo}/>            
            </div>
        </div>
    )
}
