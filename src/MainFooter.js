import React from 'react';
import NavmenuUL from './NavmenuUL';
import QuickContact from './QuickContact';
import Spacer from './Spacer';

export default function MainFooter() {
    return (
        <footer>
            <QuickContact />
            <NavmenuUL />
            <Spacer />
        </footer>
    )
}
