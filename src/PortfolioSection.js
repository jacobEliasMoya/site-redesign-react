import React from 'react';
import PortfolioProjectContainer from './PortfolioProjectContainer';
import CustomEmbed from './CustomEmbed';
import ProjectInfo from './ProjectInfo';


export default function PortfolioSection() {


    // const retSiteTitle = () => {
    //     let x = setInterval(()=>{
    //         console.log(currentSite);
    //     },100)
    // }

    const previews = ["VAREP","CONFERENCE","JAKESPACE", "PROJECT"];

    const lbsrcs = ["https://varep.net","https://varep.net/policyconference","https://jacobmoya.com","https://jacobmoya.com/gametime.html",];

    const assignType = txt => {
        switch(txt){
            case "VAREP":
                return "VAREP";
            case "CONFERENCE":
                return "VAREP";
            case "JAKESPACE":
                return "Personal Site";
            case "PROJECT":
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
            case "PROJECT":
                return "Asteroid Shooter";
                default:
                    return;
        }
    }

    const changeLBInfo = (frme,chldclass) => {
        // clearing src then adding for a clean looking load screen :)
        frme.src = '';
        setTimeout(()=>{
            if(chldclass.classList.contains("VAREP")){
                setTimeout(()=>{
                    let siteTitle = chldclass.classList[0];
                    document.querySelector('.iframe_container h1 .siteTitle').innerHTML=siteTitle;
                    document.querySelector('.iframe_container h1 .siteTitle').style.fontSize='2vw';

                },10);
                frme.src=lbsrcs[0];
            }
            if(chldclass.classList.contains("CONFERENCE")){
                setTimeout(()=>{
                    let siteTitle = chldclass.classList[0];
                    document.querySelector('.iframe_container h1 .siteTitle').innerHTML=siteTitle;
                    document.querySelector('.iframe_container h1 .siteTitle').style.fontSize='2vw';

                },10);
                frme.src=lbsrcs[1];

            }
            if(chldclass.classList.contains("JAKESPACE")){
                setTimeout(()=>{
                    let siteTitle = chldclass.classList[0];
                    document.querySelector('.iframe_container h1 .siteTitle').innerHTML=siteTitle;
                    document.querySelector('.iframe_container h1 .siteTitle').style.fontSize='2vw';

                },10);
                frme.src=lbsrcs[2];

            }
            if(chldclass.classList.contains("PROJECT")){
                setTimeout(()=>{
                    let siteTitle = chldclass.classList[0];
                    document.querySelector('.iframe_container h1 .siteTitle').innerHTML=siteTitle;
                    document.querySelector('.iframe_container h1 .siteTitle').style.fontSize='2vw';

                },10);
                frme.src=lbsrcs[3];
            }
        },500)
    }

    const triggerLB = (e) =>{
        let lb = document.querySelector('.iframe_container');
        let lbsrc = document.querySelector('.iframe_container iframe');
        lb.style="width: 90%;height: 90vh;opacity:1";
        changeLBInfo(lbsrc,e.target.parentElement.firstChild);
    }

    const untriggerLB = () => {
        document.querySelector('.iframe_container h1 .siteTitle').style.fontSize='0vw';
        let lb = document.querySelector('.iframe_container');
        lb.style="width: 0%;height: 0vh;opacity:0";
    }

    const triggerInfo = (e) =>{
        let lb = document.querySelector('.info_container');
        lb.style="width: 90%;height: 90vh;opacity:1";
        // changeLBInfo(lbsrc,e.target.parentElement.firstChild);
    }

    const untriggerInfo = () => {
        document.querySelector('.info_container h1 .siteTitle').style.fontSize='0vw';
        let lb = document.querySelector('.info_container');
        lb.style="width: 0%;height: 0vh;opacity:0";
    }



    return (
        <section id="my_portfolio" className="portfolio_section">
            <CustomEmbed projectName={"projectname"} untriglb={untriggerLB} />
            <ProjectInfo projectName={"projectname"} onClick={untriggerInfo} />

            <h1>
                Portfolio
            </h1>
            <div className="portfolio_project_selector">
                <div className="top_row">
                    {previews.map(key=>{
                        return (<PortfolioProjectContainer infotrig={triggerInfo} lbtrig={triggerLB} description={assignDesc(key)} maintitle={assignType(key)} newclass={key} key={key}/>)
                    })}
                </div>
            </div>
        </section>
    )
}
