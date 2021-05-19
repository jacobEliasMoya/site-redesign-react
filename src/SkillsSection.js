import React from 'react';
import skill1 from './images/wp.png';


export default function SkillsSection() {
    return (
        <section>
            <div>
                <h1>Technology I Use</h1>

                <div className="project_container">
                    <div className="row one">
                        <div className="p1 container"><img/></div>
                        <div className="p2 container"><img/></div>
                        <div className="p3 container"><img/></div>
                    </div>

                    <div className="row two">
                        <div className="p4 container"><img/></div>
                        <div className="p5 container"><img/></div>
                        <div className="p6 container"><img/></div>
                    </div>
                </div>
            </div>

            <div>
                <h1>How I use it</h1>
            </div>
        </section>
    )
}
