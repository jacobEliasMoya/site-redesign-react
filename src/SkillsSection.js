import React,{useState,useEffect} from 'react';
import ImgSelector from './ImgSelector';
import Iconcontainer from './Iconcontainer';
import Subskills from './Subskills';

import skill1 from './images/wp.png';
import skill2 from './images/js.png';
import skill3 from './images/rjs.png';
import skill4 from './images/css.png';
import skill5 from './images/scss.png';
import skill6 from './images/html.png';

let keyMain = 0;

export default function SkillsSection() {

    // refactor to an object? food for thought
    const skillImgs = [skill1,skill2,skill3,skill4,skill5,skill6];
    const skillAltDesc = ["wordpress_img_logo_white","JavaScript_img_logo_white","React_img_logo_white","css_img_logo_white","scss_img_logo_white","html_img_logo_white"];


    const wpInfo = ["WPVideo & Audio Support","Forms and Validation","Semantic HTML","Email Inputs","Placeholders","Downloads","Emdedding","Tables"];
    const jsInfo = ["JSVideo & Audio Support","Forms and Validation","Semantic HTML","Email Inputs","Placeholders","Downloads","Emdedding","Tables"];
    const reactInfo = ["REACTVideo & Audio Support","Forms and Validation","Semantic HTML","Email Inputs","Placeholders","Downloads","Emdedding","Tables"];
    const cssInfo = ["CSSVideo & Audio Support","Forms and Validation","Semantic HTML","Email Inputs","Placeholders","Downloads","Emdedding","Tables"];
    const scssInfo = ["SCSSVideo & Audio Support","Forms and Validation","Semantic HTML","Email Inputs","Placeholders","Downloads","Emdedding","Tables"];
    const htmlInfo = ["Video & Audio Support","Forms and Validation","Semantic HTML","Email Inputs","Placeholders","Downloads","Emdedding","Tables"];

    const skillsArr = ["WordPress","JavaScript","ReactJS","CSS3","SCSS","HTML5"];

    const [currentSkillInd,setCurrentSkill] = useState(0);
    const [currentSkillArray,setSkillArray] = useState(wpInfo);

    const spinImg = () => {
        const spinimg = document.querySelector('.container.current img');
        spinimg.style.opacity='0';
        spinimg.style.transform='rotateY(180deg)';
        setTimeout(()=>{
            spinimg.style.opacity='1';
            spinimg.style.transform='rotateY(0deg)';
        },250)
    }


    const incremementSkillInd = () => {
        if(currentSkillInd < skillsArr.length-1){
            setCurrentSkill(ind => ind + 1);
        } else {
            setCurrentSkill(ind => ind= 0);
        }
        spinImg();
    }

    const decrementSkillInd = () => {
        if(currentSkillInd > 0){
            setCurrentSkill(ind => ind - 1);
        } else{
            setCurrentSkill(ind => ind = skillsArr.length-1);
        }
        spinImg();
    }

    const assignNewArray = () => {
        switch(currentSkillInd){
            case 0:
                setSkillArray(skill => skill = wpInfo);
                break;
            case 1:
                setSkillArray(skill => skill = jsInfo);
                break;
            case 2:
                setSkillArray(skill => skill = reactInfo);
                break;
            case 3:
                setSkillArray(skill => skill = cssInfo);
                break;
            case 4:
                setSkillArray(skill => skill = scssInfo);
                break;
            case 5:
                setSkillArray(skill => skill = htmlInfo);
                break;
            default:
                return;
            
        }
    }


    useEffect(() => {
        assignNewArray();
    },[currentSkillInd])


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
                            onClick={decrementSkillInd}
                        />
                        <div className="p6 container current">
                            <ImgSelector 
                                desc={skillAltDesc[currentSkillInd]} 
                                skill={skillImgs[currentSkillInd]}
                            />
                        </div>
                        <Iconcontainer 
                            onClick={incremementSkillInd}
                            iconclass="fa fa-caret-right"
                        />
                    </div>
                    <div className="name">
                        {skillsArr[currentSkillInd]}
                    </div>
                    <div className="skill_subskills">
                        {currentSkillArray.map((desc)=>{
                            keyMain++
                            return (<Subskills key={keyMain} skilldesc={desc} />)
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
