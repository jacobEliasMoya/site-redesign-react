import React from 'react';
import Iconcontainer from './Iconcontainer';


export default function PortfolioProjectContainer(props) {

    return (
        <div className="project_container_outer">
            <div className="project_container" >
                <div className="project_preview" id={props.newclass}></div>
                <div className="project_view">VIEW PAGE</div>
                <div className="project_info">MORE INFO</div>
            </div>

            <h1>
                <span className='main_title'>
                    {props.maintitle}
                    <Iconcontainer iconclass="fa fa-info-circle"/>
                </span>
                <br/>
                <span className="main_desc">
                    {props.description}
                </span>
            </h1>
        </div>
    )
}
