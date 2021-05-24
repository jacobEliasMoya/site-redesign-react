import React from 'react';
import PortfolioProjectContainer from './PortfolioProjectContainer';
import CustomEmbed from './CustomEmbed';

export default function PortfolioSection() {

    const previews = ["VAREP","CONFERENCE","JAKESPACE", "PHOTOSITE"];

    const lbsrcs = ["https://varep.net","https://varep.net/policyconference","https://jacobmoya.com","https://jacobmoya.com/gametime.html",];

    const assignType = txt => {
        switch(txt){
            case "VAREP":
                return "VAREP";
            case "CONFERENCE":
                return "VAREP";
            case "JAKESPACE":
                return "Personal Site";
            case "PHOTOSITE":
                return "Personal Project";
            default:
                return;
        }
    }

    const assignDesc = txt => {
        switch(txt){
            case "VAREP":
                return "Business Page";
            case "CONFERENCE":
                return "Conference Page";
            case "JAKESPACE":
                return "Fully Interactive";
            case "PHOTOSITE":
                return "Asteroid Shooter";
                default:
                    return;
        }
    }

    const changeSrc = (frme,chldclass) =>{
        // clearing src then adding for a clean looking load screen :)
        frme.src = '';
        setTimeout(()=>{
            if(chldclass.classList.contains("VAREP")){
                frme.src=lbsrcs[0];
            }
            if(chldclass.classList.contains("CONFERENCE")){
                frme.src=lbsrcs[1];
            }
            if(chldclass.classList.contains("JAKESPACE")){
                frme.src=lbsrcs[2];
            }
            if(chldclass.classList.contains("PHOTOSITE")){
                frme.src=lbsrcs[3];
            }
        },500)

    }

    const triggerLB = (e) =>{
        let lb = document.querySelector('.iframe_container');
        let lbsrc = document.querySelector('.iframe_container iframe');
        lb.style="width: 90%;height: 90vh;opacity:1";
        changeSrc(lbsrc,e.target.parentElement.firstChild);
    }

    const untriggerLB = () => {
        let lb = document.querySelector('.iframe_container');
        lb.style="width: 0%;height: 0vh;opacity:0";
    }

    return (
        <section id="my_portfolio" className="portfolio_section">
            <CustomEmbed onClick={untriggerLB} />
            <h1>
                Portfolio
            </h1>
            <div className="portfolio_project_selector">
                <div className="top_row">
                    {previews.map(key=>{
                        return (<PortfolioProjectContainer onClick={triggerLB} description={assignDesc(key)} maintitle={assignType(key)} newclass={key} key={key}/>)
                    })}
                </div>
            </div>
        </section>
    )
}
