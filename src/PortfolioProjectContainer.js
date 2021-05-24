import React from 'react';


export default function PortfolioProjectContainer(props) {

    return (
        <div className="project_container_outer">
            <div className="project_container" >
                <div className="project_preview" id={props.newclass}></div>
                <div className="project_view">VIEW PAGE</div>
                <div className="project_info">MORE INFO</div>
            </div>
        </div>
    )
}
