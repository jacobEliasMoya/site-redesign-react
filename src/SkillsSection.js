import React from 'react';
import ImgSelector from './ImgSelector';
import Iconcontainer from './Iconcontainer';
import Subskills from './Subskills';
import skill1 from './images/wp.png';
import skill2 from './images/js.png';
import skill3 from './images/rjs.png';
import skill4 from './images/css.png';
import skill5 from './images/scss.png';
import skill6 from './images/html.png';



export default function SkillsSection() {
    const html5Skills = []
    return (
        <section className="my_skills" id="my_skills">
            <div className="section_split one">
                <h1>Technology I Use</h1>

                <div className="project_container_outer">
                    <div className="project_container">
                        <div className="row one">
                            <div className="p1 container">
                                <ImgSelector desc="wordpress_img_logo_white" skill={skill1}/>
                            </div>
                            <div className="p2 container">
                                <ImgSelector desc="javascript_img_logo_white" skill={skill2}/>
                            </div>
                            <div className="p3 container">
                                <ImgSelector desc="react_img_logo_white" skill={skill3}/>
                            </div>
                        </div>

                        <div className="row two">
                            <div className="p4 container">
                                <ImgSelector desc="css_img_logo_white" skill={skill4}/>
                            </div>
                            <div className="p5 container">
                                <ImgSelector desc="scss_img_logo_white" skill={skill5}/>
                            </div>
                            <div className="p6 container">
                                <ImgSelector desc="html_img_logo_white" skill={skill6}/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="section_split two">
                <h1>How I use it</h1>
                <div className="select_skill_container">
                    <div className="toggle_area">
                        <Iconcontainer 
                            iconclass="fa fa-caret-left"
                        />
                        <div className="p6 container">
                            <ImgSelector 
                                desc="html_img_logo_white" 
                                skill={skill6}
                            />
                        </div>
                        <Iconcontainer 
                            iconclass="fa fa-caret-right"
                        />
                    </div>
                    <div className="name">
                        HTML 5
                    </div>
                    <div className="skill_subskills">
                        <Subskills skilldesc='Video & Audio Support'/>
                        <Subskills skilldesc='Forms and Validation'/>
                        <Subskills skilldesc='Semantic HTML'/>
                        <Subskills skilldesc='Email Inputs'/>
                        <Subskills skilldesc='Placeholders'/>
                        <Subskills skilldesc='Downloads'/>
                        <Subskills skilldesc='Emdedding'/>
                        <Subskills skilldesc='Tables'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
