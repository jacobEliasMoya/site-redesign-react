import React,{useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Iconcontainer from './Iconcontainer';
import Infobubble from './Infobubble';


export default function PortfolioProjectContainer(props) {

    const [bubbleToggled,setToggle] = useState(false);


    const displayInfo = (retTxt,elm) => {
        if(retTxt.classList.contains("PROJECT")){
            elm.innerHTML = 'This was developed to practice asynchronous programming, and to have fun while doing it!'
        }
        if(retTxt.classList.contains("JAKESPACE")){
            elm.innerHTML = 'This was developed using my vision of a website and game all in one for interactivity!'
        }
        if(retTxt.classList.contains("CONFERENCE")){
            elm.innerHTML = 'This was developed for a conference hosted yearly by my current employer VAREP, a veteran focused non-profit.'
        }
        if(retTxt.classList.contains("VAREP")){
            elm.innerHTML = 'This was developed as a complete top to bottom redesign for my current employer VAREP, a veteran focused non-profit.'
        }
    }

    const displayBubble = (e) =>{
        
        let bubble = e.target.parentElement.parentElement.firstChild;

        if(!bubbleToggled){
            setToggle(prevToggle=>prevToggle = true)
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


    const projAnimation = (isVisible) => {
        if(isVisible){
            document.querySelectorAll('.portfolio_project_selector div div .project_container').forEach(elm=>{
                elm.style = "transform: rotate3d(0, 0, 0, 90deg);opacity: 1;";
            })
        }
    }

    const projTxtAnimation = isVisible =>{
        if(isVisible){
            document.querySelectorAll('.animateproj').forEach(elm=>{
                elm.style = "opacity: 1;margin-left:0% !important";
            })
        }   
    }

    return (

            <div className="project_container_outer">
                <VisibilitySensor
                onChange={projAnimation}
                >
                    <div className="project_container" id={props.newclass} >
                        <div className={props.newclass} id="project_preview"></div>
                        <button onClick={props.lbtrig} className="project_view">VIEW PAGE</button>
                        <button onClick={props.infotrig} className="project_info">TECH INFO</button>
                    </div>
                </VisibilitySensor>

                <VisibilitySensor
                onChange={projTxtAnimation}
                >
                    <h1 id={props.newclass} className="animateproj">
                        <Infobubble onClick={unDisplayBubble} onleave={unDisplayBubble} description/>

                            <span className='main_title projtxt'>
                                {props.maintitle}
                                <Iconcontainer onClick={displayBubble} iconclass="fa fa-info-circle"/>
                            </span>
                        <br/>
                        <span className="main_desc projtxt">
                            {props.description}
                        </span>
                    </h1>
                </VisibilitySensor>

            </div>

    )
}
