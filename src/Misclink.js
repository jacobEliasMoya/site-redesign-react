import React from 'react'

export default function Misclink(props) {
    return (
        <a onClick={props.untrigger} href={props.link}>
            {props.title}
        </a>
    )
}
