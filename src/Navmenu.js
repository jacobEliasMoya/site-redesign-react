import React from 'react';
import Misclink from './Misclink';

export default function Navmenu() {
    return (
        <nav className='toggle_navigation'>
            <Misclink 
                link='#'  
                title='HOME'
                
            />
            <Misclink 
                link='#'  
                title='SKILLS'
            />
            <Misclink 
                link='#'  
                title='PORTFOLIO'
            />
            <Misclink 
                link='#'  
                title='CONTACT'
            />
        </nav>
    )
}
