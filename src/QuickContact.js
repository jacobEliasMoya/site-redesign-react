import React from 'react'
import Iconcontainer from './Iconcontainer'

export default function QuickContact() {
    return (
        <ul className="quickconnect">
            <li>
                <Iconcontainer iconclass={'fa fa-envelope'}/>
                <a href="mailto:jemoya1994@gmail.com">Email Me</a>
            </li>
            
            <li>
                <Iconcontainer iconclass={'fa fa-phone'}/>
                <a href="tel:9096446073">Call me </a>
            </li>
        </ul>
    )
}
