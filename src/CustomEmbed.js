import React from 'react'

export default function CustomEmbed(props) {
    return (
        <div className="iframe_container">
            <iframe className="iframe_inner" title='iframe' src='' width="300" height="200">
            </iframe>
            <h1>
                {props.projectName}
                <span onClick={props.onClick} className="floater_close">X</span>
            </h1>
        </div>
    )
}
