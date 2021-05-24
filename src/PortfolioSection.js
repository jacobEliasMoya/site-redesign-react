import React from 'react';
import PortfolioProjectContainer from './PortfolioProjectContainer';


export default function PortfolioSection() {

    const previews = ["VAREP","CONFERENCE","JAKESPACE", "PHOTOSITE"];

    const assignType = txt => {
        switch(txt){
            case "VAREP":
                return "VAREP";
                break;
            case "CONFERENCE":
                return "VAREP";
                break;
            case "JAKESPACE":
                return "Personal Site";
                break;
            case "PHOTOSITE":
                return "Personal Project";
                break;
        }
    }

    const assignDesc = txt => {
        switch(txt){
            case "VAREP":
                return "Business Page";
                break;
            case "CONFERENCE":
                return "Conference Page";
                break;
            case "JAKESPACE":
                return "Fully Interactive";
                break;
            case "PHOTOSITE":
                return "Asteroid Shooter";
                break;
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
