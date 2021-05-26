import React from 'react'

export default function Infobubble(props) {
    return (
        <div onMouseLeave={props.onleave} className='infobubble'>
            {props.description}
        </div>
    )
}
