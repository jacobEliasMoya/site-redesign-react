import React from 'react';
// mainlogo for header
import Logo from './images/logo.png';

export default function Mainnav(props) {
    return (
        <nav className='mainnav'>
          <img src={Logo} alt="jmoya_logo"/>
          <div>
            <i onClick={props.onClick} className="fa fa-bars triggeroverlay"></i>
          </div>
        </nav>
    )
}
