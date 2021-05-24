import React from 'react';
import PortfolioProjectContainer from './PortfolioProjectContainer';


export default function PortfolioSection() {

    const previews = ["VAREP","CONFERENCE","JAKESPACE", "PHOTOSITE"]

    return (
        <section id="my_portfolio" className="portfolio_section">
            <h1>
                Portfolio
            </h1>
            <div className="portfolio_project_selector">
                <div className="top_row">
                    {previews.map(key=>{
                        return (<PortfolioProjectContainer newclass={key} key={key}/>)
                    })}
                </div>
            </div>
        </section>
    )
}
