import React from 'react'

export default function Misclink(props) {
    return (
        <a href={props.link}>
            {props.title}
        </a>
    )
}
