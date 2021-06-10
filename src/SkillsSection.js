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
import VisibilitySensor from 'react-visibility-sensor';

let keyMain = 0;

export default function SkillsSection() {

    // refactor to an object? food for thought nom nom nom
    const skillImgs = [skill1,skill2,skill3,skill4,skill5,skill6];
    const skillAltDesc = ["wordpress_img_logo_white","JavaScript_img_logo_white","React_img_logo_white","css_img_logo_white","scss_img_logo_white","html_img_logo_white"];

    const wpInfo = ["Theme Customization","Custom HTML & CSS","Site Building Tools","SEO Knowledge","HTTP redirects","Site Migrations","Plugin Expert"];
    const jsInfo = ["Object Oriented Programming","Functional Programming","Cross Browser Code","Version Control","Command Line","ES6 Scripting","Modular Code","REST API","DRY Code"];
    const reactInfo = ["Class Based Components","Functional Components","Modular Code","ES6 Scripting","React Hooks","REST API","DRY Code","Redux"];
    const cssInfo = ["Cross Browser Compatibility","Cross Platform Compatibility","Keyframe Animations","Mobile First Design","Psuedo Classes","Media Queries","FlexBox","Grid",];
    const scssInfo = ["Variables For DRY Code","Importing Stylesheets","Nesting Styles","Mixin Usage"];
    const htmlInfo = ["Video & Audio Support","Forms and Validation","Semantic HTML","Email Inputs","Placeholders","Downloads","Emdedding","Tables"];

    const skillsArr = ["WordPress","JavaScript","ReactJS","CSS3","SCSS","HTML5"];

    const [currentSkillInd,setCurrentSkill] = useState(0);
    const [currentSkillArray,setSkillArray] = useState(wpInfo);

    const spinImg = () => {
        const spinimg = document.querySelector('.container.current img');
        spinimg.style='opacity:0;transform: rotateY(180deg);';
        setTimeout(()=>{
            spinimg.style='opacity:1;transform: rotateY(0deg) ;';
        },250)
    }

    const opaqeNout = () => {
        const spinimg = document.querySelector('.select_skill_container .name');
        spinimg.style.transform='rotateY(180deg)';
        setTimeout(()=>{
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
        opaqeNout();
    }

    const decrementSkillInd = () => {
        if(currentSkillInd > 0){
            setCurrentSkill(ind => ind - 1);
        } else{
            setCurrentSkill(ind => ind = skillsArr.length-1);
        }
        spinImg();
        opaqeNout();
    }

    const assignNewArray = () => {
        const activeDisplayer = [document.querySelector('.p1select'),document.querySelector('.p2select'),document.querySelector('.p3select'),document.querySelector('.p4select'),document.querySelector('.p5select'),document.querySelector('.p6select')];

        switch(currentSkillInd){
            case 0:
                setSkillArray(skill => skill = wpInfo);
                activeDisplayer[currentSkillInd].classList.add('currentlyActive')
                activeDisplayer[1].classList.remove('currentlyActive');
                activeDisplayer[2].classList.remove('currentlyActive');
                activeDisplayer[3].classList.remove('currentlyActive');
                activeDisplayer[4].classList.remove('currentlyActive');
                activeDisplayer[5].classList.remove('currentlyActive');
                break;
            case 1:
                setSkillArray(skill => skill = jsInfo);
                activeDisplayer[currentSkillInd].classList.add('currentlyActive')
                activeDisplayer[0].classList.remove('currentlyActive');
                activeDisplayer[2].classList.remove('currentlyActive');
                activeDisplayer[3].classList.remove('currentlyActive');
                activeDisplayer[4].classList.remove('currentlyActive');
                activeDisplayer[5].classList.remove('currentlyActive');

                break;
            case 2:
                setSkillArray(skill => skill = reactInfo);
                activeDisplayer[currentSkillInd].classList.add('currentlyActive')
                activeDisplayer[1].classList.remove('currentlyActive');
                activeDisplayer[0].classList.remove('currentlyActive');
                activeDisplayer[3].classList.remove('currentlyActive');
                activeDisplayer[4].classList.remove('currentlyActive');
                activeDisplayer[5].classList.remove('currentlyActive');

                break;
            case 3:
                setSkillArray(skill => skill = cssInfo);
                activeDisplayer[currentSkillInd].classList.add('currentlyActive')
                activeDisplayer[1].classList.remove('currentlyActive');
                activeDisplayer[2].classList.remove('currentlyActive');
                activeDisplayer[0].classList.remove('currentlyActive');
                activeDisplayer[4].classList.remove('currentlyActive');
                activeDisplayer[5].classList.remove('currentlyActive');

                break;
            case 4:
                setSkillArray(skill => skill = scssInfo);
                activeDisplayer[currentSkillInd].classList.add('currentlyActive')
                activeDisplayer[1].classList.remove('currentlyActive');
                activeDisplayer[2].classList.remove('currentlyActive');
                activeDisplayer[3].classList.remove('currentlyActive');
                activeDisplayer[0].classList.remove('currentlyActive');
                activeDisplayer[5].classList.remove('currentlyActive');
                break;
            case 5:
                setSkillArray(skill => skill = htmlInfo);
                activeDisplayer[currentSkillInd].classList.add('currentlyActive')
                activeDisplayer[1].classList.remove('currentlyActive');
                activeDisplayer[2].classList.remove('currentlyActive');
                activeDisplayer[3].classList.remove('currentlyActive');
                activeDisplayer[4].classList.remove('currentlyActive');
                activeDisplayer[0].classList.remove('currentlyActive');

                break;
            default:
            return;
        }
    }



    const projTxtAnimationm = isVisible => {
        if(isVisible){
            document.querySelector('.mytech').style = "opacity: 1;margin-left:0% !important";;
        }
    }

    const projTxtAnimationm2 = isVisible => {
        if(isVisible){
            document.querySelector('.howtech').style = "opacity: 1;margin-left:0% !important";;
        }
    }

    const projAnimation = (isVisible) => {
        if(isVisible){
            document.querySelectorAll('.pcontainanim').forEach(elm=>{
                elm.style = "transform: rotate3d(0, 0, 0, 90deg);opacity: 1;";
            })
        }
    }

    const projAnimationm2 = (isVisible) => {
        if(isVisible){
            document.querySelector('.select_skill_container').style = "opacity: 1;";
        }
    }

    useEffect(() => {
        assignNewArray();
    },[currentSkillInd])


    return (
        <section className="my_skills" id="my_skills">

            <div className="section_split one">
            <VisibilitySensor 
                onChange={projTxtAnimationm}
            >
            <h1 className="mytech">Technology I Use</h1>
            </VisibilitySensor>
                
  
                <div className="project_container_outer">
                    <VisibilitySensor
                        onChange={projAnimation}
                    >
                        <div className="project_container pcontainanim">
                        <div className="row one">
                            <div className="p1select container">
                                <ImgSelector desc="wordpress_img_logo_white" skill={skill1}/>
                            </div>
                            <div className="p2select container">
                                <ImgSelector desc="javascript_img_logo_white" skill={skill2}/>
                            </div>
                            <div className="p3select container">
                                <ImgSelector desc="react_img_logo_white" skill={skill3}/>
                            </div>
                        </div>

                        <div className="row two">
                            <div className="p4select container">
                                <ImgSelector desc="css_img_logo_white" skill={skill4}/>
                            </div>
                            <div className="p5select container">
                                <ImgSelector desc="scss_img_logo_white" skill={skill5}/>
                            </div>
                            <div className="p6select container">
                                <ImgSelector desc="html_img_logo_white" skill={skill6}/>
                            </div>
                        </div>
                    </div>
                    </VisibilitySensor>
                </div>


            </div>

            <div className="section_split two">
                <VisibilitySensor 
                    onChange={projTxtAnimationm2}
                >
                <h1 className="howtech">How I use it</h1>
                </VisibilitySensor>
                
                <VisibilitySensor
                    onChange={projAnimationm2}
                >
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
                    </VisibilitySensor>
            </div>
        </section>
    )
}
