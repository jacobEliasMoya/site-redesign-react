import React from 'react';
// mainlogo for header
import Logo from './images/logo.png';

export default function Mainnav() {
    return (
        <nav>
          <img src={Logo} alt="jmoya_logo"/>
          <div>
            <i className="fa fa-bars triggeroverlay"></i>
          </div>
        </nav>
    )
}
