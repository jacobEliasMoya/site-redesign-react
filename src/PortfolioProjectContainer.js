import React from 'react';
import Iconcontainer from './Iconcontainer';
import Infobubble from './Infobubble';


export default function PortfolioProjectContainer(props) {

    


    const displayInfo = () =>{
        console.log('working');
        return (<Infobubble description='bubble'/>)
    }

    return (
       
        <div className="project_container_outer">

            <div className="project_container" >
                <div className={props.newclass} id="project_preview"></div>
                <button onClick={props.onClick} className="project_view">VIEW PAGE</button>
                <button className="project_info">MORE INFO</button>
            </div>

            <h1>
                <span className='main_title'>
                 <Infobubble description='bubble'/>
                    {props.maintitle}
                    <Iconcontainer hoverOver={displayInfo} iconclass="fa fa-info-circle"/>
                </span>
                <br/>
                <span className="main_desc">
                    {props.description}
                </span>
            </h1>
        </div>
    )
}
