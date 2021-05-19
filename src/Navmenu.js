import React from 'react';
import Misclink from './Misclink';
import Mainnav from './Mainnav';

export default function Navmenu() {
    return (
        <nav className='toggle_navigation'>

            <Mainnav
            />

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
