import React from 'react'

export default function Infobubble(props) {
    return (
        <div onClick={props.onClick} onMouseLeave={props.onleave} className='infobubble'>
            {props.description}
        </div>
    )
}
