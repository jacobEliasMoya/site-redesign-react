import React from 'react';
import Misclink from './Misclink';

export default function Navmenu() {
    
    const untriggerNav = (e) =>{
        
        const navelm = document.querySelector('.toggle_navigation');
        if(e.target.parentElement.style.width!=='100vw'){
            navelm.style='width:100vw;height:100vh;border-bottom-left-radius:0% !important;opacity:1;font-size:2vw';
        } else {
            navelm.style='width:0vw;height:0vh;border-bottom-left-radius:50% !important;opacity:0;font-size:0vw';
          // changing state to 
        }
      }

    return (
        <nav className='toggle_navigation'>
            <Misclink 
                untrigger ={untriggerNav}
                link='#welcome_section'  
                title='HOME'
                
            />
            <Misclink 
                untrigger ={untriggerNav}
                link='#my_skills'  
                title='SKILLS'
            />
            <Misclink 
                untrigger ={untriggerNav}
                link='#my_portfolio'  
                title='PORTFOLIO'
            />
            <Misclink 
                untrigger ={untriggerNav}
                link='#'  
                title='CONTACT'
            />
        </nav>
    )
}
