import React from 'react';
import Misclink from './Misclink';
import Iconcontainer from './Iconcontainer'

export default function NavmenuUL() {
    return (
    <ul>
        <li>
          <Iconcontainer
            iconclass={'fa fa-home'}
          />
          <Misclink
            link='#welcome_section'  
            title='Home'
          />
        </li>
        <li>
          <Iconcontainer
            iconclass={'	fa fa-laptop'}
          />
          <Misclink
            link='#my_skills'  
            title='Skills'
          />              
        </li>
        <li>
          <Iconcontainer
            iconclass={'fa fa-briefcase'}
          />
          <Misclink
            link='#my_portfolio'  
            title='Portfolio'
          />              
        </li>
        <li>
          <Iconcontainer
            iconclass={'fa fa-envelope'}
          />
          <Misclink
            link='#about_section'  
            title='Contact'
          />              
        </li>
    </ul>
    )
}
