import React from 'react';
import Iconcontainer from './Iconcontainer';

export default function PortfolioProjectContainer(props) {

    // const illuminateElms = (e) => {
    //     e.target.style = " ";
    // }

    return (
       
        <div className="project_container_outer">

            <div className="project_container" >
                <div className={props.newclass} id="project_preview"></div>
                <button onClick={props.onClick} className="project_view">VIEW PAGE</button>
                <button className="project_info">MORE INFO</button>
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
