import React,{useState} from 'react';
// mainlogo for header
import Logo from './images/logo.png';

export default function Mainnav() {

  const [isToggled,setToggle] = useState(false);

  const triggerNav = () =>{
    const navelm = document.querySelector('.toggle_navigation');
    if(!isToggled){
      navelm.style.width='100vw';
      navelm.style.height='100vh';
      navelm.style.borderBottomLeft='0% !important';
      navelm.style.opacity='1';
      setToggle(isToggled=>true);
    } else {
      navelm.style.opacity='0';
      navelm.style.width='0vw';
      navelm.style.height='0vh';
      navelm.style.borderBottomLeft='50% !important';
      // changing state to 
      setToggle(isToggled=>false);

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
