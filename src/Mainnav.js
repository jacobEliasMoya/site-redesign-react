import React from 'react';
import Misclink from './Misclink';
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
        <a href="#welcome_section"><img src={Logo} alt="jmoya_logo"/></a>
        <div>
          <i onClick={triggerNav} className="fa fa-bars triggeroverlay"></i>
          <ul>
              <li>
                <Misclink
                  link='#welcome_section'  
                  title='Home'
                />
              </li>
              <li>
                <Misclink
                  link='#my_skills'  
                  title='Skills'
                />              
              </li>
              <li>
                <Misclink
                  link='#my_portfolio'  
                  title='Portfolio'
                />              
              </li>
              <li>
                <Misclink
                  link='#about_section'  
                  title='Contact'
                />              
              </li>
          </ul>
        </div>
      </nav>
  )
}
