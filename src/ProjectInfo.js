import React from 'react'

export default function ProjectInfo(props) {
    return (
        <div className="info_container">

            <div className="top_row">
                <div className="proj_img">
                </div>
                <div className="proj_information">
                    <h1>{props.projectName}</h1>
                    <h2 className="header_li">Technology Used</h2>
                    <ul>
                        
                    </ul>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h1>
                <span className="siteTitle">Project/ Site Name</span>
                <span onClick={props.onClick} className="floater_close">X</span>
            </h1>
        </div>
    )
}
