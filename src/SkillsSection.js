import React from 'react';
import ImgSelector from './ImgSelector';
import skill1 from './images/wp.png';
import skill2 from './images/js.png';
import skill3 from './images/rjs.png';
import skill4 from './images/css.png';
import skill5 from './images/scss.png';
import skill6 from './images/html.png';



export default function SkillsSection() {
    return (
        <section className="my_skills" id="my_skills">
            <div className="section_split one">
                <h1>Technology I Use</h1>

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

            <div className="section_split two">
                <h1>How I use it</h1>
                <div className="select_skill_container">
                    <div className="toggle_area">
                        <i className="fas fa-caret-left"></i>
                        <div className="p6 container">
                            <ImgSelector desc="html_img_logo_white" skill={skill6}/>
                        </div>
                        <i className="fas fa-caret-right"></i>
                    </div>
                    <div className="skill_descr">

                    </div>
                </div>
            </div>
        </section>
    )
}
