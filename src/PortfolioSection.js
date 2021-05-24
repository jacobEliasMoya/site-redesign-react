import React from 'react';
import PortfolioProjectContainer from './PortfolioProjectContainer';


export default function PortfolioSection() {

    const previews = ["VAREP","CONFERENCE","JAKESPACE", "PHOTOSITE"];

    const assignType = txt => {
        if(txt==="VAREP"){
            return "VAREP";
        } else if(txt==="CONFERENCE"){
            return "VAREP";
        }else if(txt==="JAKESPACE"){
            return "Personal Site";
        } else {
            return "Personal Project";
        }
    }

    const assignDesc = txt => {
        if(txt==="VAREP"){
            return "Business Page";
        } else if(txt==="CONFERENCE"){
            return "Conference Page";
        }else if(txt==="JAKESPACE"){
            return "Conference Page";
        } else {
            return "Fully Interactive";
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
