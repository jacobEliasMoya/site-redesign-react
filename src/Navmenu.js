import React from 'react';
import Misclink from './Misclink';

export default function Navmenu() {
    return (
        <nav className='toggle_navigation'>
            <Misclink 
                link='#welcome_section'  
                title='HOME'
                
            />
            <Misclink 
                link='#my_skills'  
                title='SKILLS'
            />
            <Misclink 
                link='#my_portfolio'  
                title='PORTFOLIO'
            />
            <Misclink 
                link='#'  
                title='CONTACT'
            />
        </nav>
    )
}
