import React from 'react';
import NavmenuUL from './NavmenuUL';
import QuickContact from './QuickContact';
import Logo from './images/logo.png';

export default function MainFooter() {
    return (
        <footer>
            <QuickContact />
            <NavmenuUL />
            <div>
                <span className="mainspanfoot">
                    <a href="welcome_section"><img alt='logo' src={Logo} /></a>
                    </span>
                <p> &copy; Jacobmoya.com 2021 </p>
            </div>

        </footer>
    )
}
