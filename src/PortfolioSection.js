import React from 'react';
import PortfolioProjectContainer from './PortfolioProjectContainer';
import CustomEmbed from './CustomEmbed';
import ProjectInfo from './ProjectInfo';

import proj1 from './images/preview1.webp';
import proj2 from './images/preview2.webp';
import proj3 from './images/preview3.webp';
import proj4 from './images/preview4.webp';


export default function PortfolioSection() {

    const previews = ["VAREP","CONFERENCE","JAKESPACE", "PROJECT"];


    const projectInfo = {
        varepSite:{
            siteName : 'Varep Business',
            siteTools : ['Wordpress','HTML','CSS','JavaScript'],
            projInformation: 'This website was built with Wordpress, and was completely redesigned from the ground up.This project uses multiple plugins, each of which was thouroughly researched and compatible with one another. The project was created in a different directory from the homesite, and from there we migrated the site over. This site has a fully functional membership section with a robust networking section for all members! I was able to use my expertise with custom HTML, custom CSS, and custom Javascript to accomplish some of the more complex pages!'
        },
        varepConference:{
            siteName : 'Varep Conference',
            siteTools : ['Wordpress','HTML','CSS','JavaScript'],
            projInformation:'This is information to project two'
        },
        funpersonalSite:{
            siteName : 'Interactive Site',
            siteTools : ['HTML','CSS','SCSS','PHP','JavaScript'],
            projInformation:'This is information to project three'
        },
        personalProj:{
            siteName : 'Personal Project',
            siteTools : ['HTML','CSS','SCSS','JavaScript'],
            projInformation:'This is information to project four'
        },
    }

    const lbsrcs = ["https://varep.net","https://varep.net/policyconference","https://jacobmoya.com","https://jacobmoya.com/gametime.html"];

    const addDynamicLI = arr => {
        document.querySelector('.proj_information ul').innerHTML='';
        arr.forEach(item=>{
            let newli = document.createElement('li');
            newli.innerHTML=item;
            document.querySelector('.proj_information ul').append(newli);
        })
    }

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

    const changeInfoBox = (chldclass) => {
        // clearing src then adding for a clean looking load screen :)
        setTimeout(()=>{
            if(chldclass.classList.contains("VAREP")){
                document.querySelector('.proj_information h1').innerHTML=projectInfo.varepSite.siteName;
                document.querySelector('.info_container p').innerHTML=projectInfo.varepSite.projInformation;
                setTimeout(()=>{
                    document.querySelector('.proj_img').style=`background-image: url(${proj1});background-size:100% 100%;`;
                    document.querySelector('.info_container p').style='opacity:1 !important;';
                    document.querySelector('.proj_information h1').style='opacity:1 !important;';
                    document.querySelector('.proj_information h2').style='opacity:1 !important;';
                    document.querySelector('.proj_information ul').style='opacity:1 !important;';

                    addDynamicLI(projectInfo.varepSite.siteTools)
                },10);
            }
            if(chldclass.classList.contains("CONFERENCE")){
                document.querySelector('.proj_information h1').innerHTML=projectInfo.varepConference.siteName;
                setTimeout(()=>{
                    document.querySelector('.proj_img').style=`background-image: url(${proj3});background-size:100% 100%;`;
                    document.querySelector('.proj_information h1').style='opacity:1 !important;';
                    document.querySelector('.proj_information h2').style='opacity:1 !important;';
                    document.querySelector('.proj_information ul').style='opacity:1 !important;';

                    addDynamicLI(projectInfo.varepConference.siteTools)
                },10);

            }
            if(chldclass.classList.contains("JAKESPACE")){
                document.querySelector('.proj_information h1').innerHTML=projectInfo.funpersonalSite.siteName;
                setTimeout(()=>{
                    document.querySelector('.proj_img').style=`background-image: url(${proj2});background-size:100% 100%;`;
                    document.querySelector('.proj_information h1').style='opacity:1 !important;';
                    document.querySelector('.proj_information h2').style='opacity:1 !important;';
                    document.querySelector('.proj_information ul').style='opacity:1 !important;';

                    addDynamicLI(projectInfo.funpersonalSite.siteTools)
                },10);

            }
            if(chldclass.classList.contains("PROJECT")){
                document.querySelector('.proj_information h1').innerHTML=projectInfo.personalProj.siteName;
                setTimeout(()=>{
                    document.querySelector('.proj_img').style=`background-image: url(${proj4});background-size:100% 100%;`;
                    document.querySelector('.proj_information h1').style='opacity:1 !important;';
                    document.querySelector('.proj_information h2').style='opacity:1 !important;';
                    document.querySelector('.proj_information ul').style='opacity:1 !important;';

                    addDynamicLI(projectInfo.personalProj.siteTools)
                },10);
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
        changeInfoBox(e.target.parentElement.firstChild);

        let lb = document.querySelector('.info_container');
        lb.style="width: 90%;height: 90vh;opacity:1";

        let projImg = document.querySelector('.top_row .proj_img');
        projImg.style = "min-height:intial;width:intial";

        let lbAll = document.querySelector('.info_container p');
        lbAll.style='font-size:intial !important';
    }

    const untriggerInfo = () => {
        document.querySelector('.proj_img').style=`background-size:intial;`;

        let lb = document.querySelector('.info_container');
        lb.style="width: 0%;height: 0vh;opacity:0";

        let projImg = document.querySelector('.top_row .proj_img');
        projImg.style = "min-height:0vh;width:0%";

        let lbAll = document.querySelector('.info_container p');
        lbAll.style='font-size:0vw !important';

        document.querySelector('.info_container p').style='opacity:0 !important;';
        document.querySelector('.proj_information h2').style='opacity:0 !important;';
        document.querySelector('.proj_information h1').style='opacity:0 !important;';
        document.querySelector('.proj_information ul').style='opacity:0 !important;';

    }

    return (
        <section id="my_portfolio" className="portfolio_section">
            <CustomEmbed projectName={"projectname"} untriglb={untriggerLB} />
            <ProjectInfo onClick={untriggerInfo} />
            <h1 className='recent_work_header'>
                My Recent Work
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
