import React,{useState} from 'react';
import Iconcontainer from './Iconcontainer';
import Infobubble from './Infobubble';


export default function PortfolioProjectContainer(props) {

    const [bubbleToggled,setToggle] = useState(false);


    const displayInfo = (retTxt,elm) => {
        if(retTxt.classList.contains("PHOTOSITE")){
            elm.innerHTML = '<p>This was developed to practice <span style="color:rgb(239, 93, 168)">asynchronous</span> programming, and to have fun while doing it!<p>'
        }
        if(retTxt.classList.contains("JAKESPACE")){
            elm.innerHTML = '<p>This was developed using my vision of a website and game all in one for <span style="color:rgb(239, 93, 168)">interactivity</span>!</p>'
        }
        if(retTxt.classList.contains("CONFERENCE")){
            elm.innerHTML = '<p>This was developed for a conference hosted yearly by my current employer <span style="color:rgb(239, 93, 168)">VAREP</span>, a veteran focused non-profit.</p>'
        }
        if(retTxt.classList.contains("VAREP")){
            elm.innerHTML = '<p>This was developed as a complete top to bottom redesign for my current employer <span style="color:rgb(239, 93, 168)">VAREP</span>, a veteran focused non-profit.</p>'
        }
    }

    const displayBubble = (e) =>{
        
        if(!bubbleToggled){
            setToggle(prevToggle=>prevToggle = true)
            let bubble = e.target.parentElement.parentElement.firstChild;
            bubble.style='min-height:7rem;width:80%;padding:1rem;font-size:1rem';
            let retdiv = e.target.parentElement.parentElement.parentElement.children[0].children[0];
            displayInfo(retdiv,bubble);
        }
    }

    const unDisplayBubble = (e) =>{
        if(bubbleToggled){
            let bubble = e.target;
            bubble.style='height:0rem;width:0rem;font-size:0rem';
            setToggle(prevToggle=>prevToggle = false)
        }
    }


    return (
       
        <div className="project_container_outer">

            <div className="project_container" >
                <div className={props.newclass} id="project_preview"></div>
                <button onClick={props.onClick} className="project_view">VIEW PAGE</button>
                <button className="project_info">MORE INFO</button>
            </div>

            <h1 >
                <Infobubble onleave={unDisplayBubble} description/>
                <span className='main_title'>
                    {props.maintitle}
                    <Iconcontainer onClick={displayBubble} iconclass="fa fa-info-circle"/>
                </span>
                <br/>
                <span className="main_desc">
                    {props.description}
                </span>
            </h1>
        </div>
    )
}
