import React from 'react';
// mainlogo for header
import Logo from './images/logo.png';

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
        <img src={Logo} alt="jmoya_logo"/>
        <div>
          <i onClick={triggerNav} className="fa fa-bars triggeroverlay"></i>
        </div>
      </nav>
  )
}
