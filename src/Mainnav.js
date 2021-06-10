import React from 'react';
import Logo from './images/logo.png';
import NavmenuUL from './NavmenuUL';


export default function Mainnav() {

  const triggerNav = () =>{
    const navelm = document.querySelector('.toggle_navigation');
    if(navelm.style.width !== '100vw'){
      navelm.style='width:100vw;height:100vh;border-bottom-left-radius:0% !important;opacity:1;font-size:2vw';
    } else {
      navelm.style='width:0vw;height:0vh;border-bottom-left-radius:50% !important;opacity:0;font-size:0vw';
    }
  }



  return (
      <nav className='mainnav'>
        <a href="#welcome_section"><img src={Logo} alt="jmoya_logo"/></a>
        <div>
          <i onClick={triggerNav} className="fa fa-bars triggeroverlay"></i>
          <NavmenuUL />
        </div>
      </nav>
  )
}
