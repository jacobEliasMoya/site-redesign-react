import React from 'react'

export default function ProjectInfo(props) {
    return (
        <div className="info_container">

            <div className="top_row">
                <div className="proj_img">
                </div>
                <div className="proj_information">
                    <h1>...</h1>
                    <h2 className="header_li">Technology Used</h2>
                    <ul>
                    </ul>
                </div>
            </div>
            <p></p>
            <h1 className="info_closer">
                <span className="siteTitle">Project/ Site Name</span>
                <span onClick={props.onClick} className="floater_close">X</span>
            </h1>
        </div>
    )
}
