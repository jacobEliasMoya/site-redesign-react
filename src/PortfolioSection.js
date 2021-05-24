import React from 'react';
import PortfolioProjectContainer from './PortfolioProjectContainer';


export default function PortfolioSection() {

    const previews = ["VAREP","CONFERENCE","JAKESPACE", "PHOTOSITE"];

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


    return (
        <section id="my_portfolio" className="portfolio_section">
            <h1>
                Portfolio
            </h1>
            <div className="portfolio_project_selector">
                <div className="top_row">
                    {previews.map(key=>{
                        return (<PortfolioProjectContainer description={assignDesc(key)} maintitle={assignType(key)} newclass={key} key={key}/>)
                    })}
                </div>
            </div>
        </section>
    )
}
