import React from 'react'

export default function Iconcontainer(props) {
    return (
        <i onClick={props.onClick} onMouseOver={props.hoverOver} className={props.iconclass}>
            
        </i>
    )
}
