import React,{useState} from 'react';
// mainlogo for header
import Logo from './images/logo.png';

export default function Mainnav(props) {

  const [isToggled,setToggle] = useState(false);

  const triggerNav = () =>{
    const navelm = document.querySelector('.toggle_navigation');
    if(!isToggled){
      navelm.style.width='100vw';
      navelm.style.height='100vh';
      navelm.style.borderRadius='0%';
      navelm.style.opacity='1';
      setToggle(isToggled=>true);
    } else {
      navelm.style.opacity='0';
      navelm.style.width='0vw';
      navelm.style.height='0vh';
      navelm.style.borderRadius='50%';
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
