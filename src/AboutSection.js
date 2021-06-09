import React,{useState} from 'react';
import emailjs from "emailjs-com";

export default function AboutSection() {

    const [isSubmitted,setSubmitted] = useState(null); 
    const [fname,setfname] = useState();
    const [lname,setlname] = useState();
    const [emaila,setEmail] = useState();
    const [subj,setSubj] = useState();
    const [messageCont,setMesCont] = useState();
    
    const handleChange = (e) => {
        displaySend();
        if(e.target.classList.contains('fname')){
            if(e.target.value !== ''){
                setfname(true);
            } else {
                setfname(false);
            }
        }
        if(e.target.classList.contains('lname')){
            if(e.target.value !== ''){
                setlname(true);
            } else {
                setlname(false);
            }
        }
        if(e.target.classList.contains('email')){
            if(e.target.value !== ''){
                checkValidEmail();
            } else {
                setEmail(false);
            }
        }
        if(e.target.classList.contains('subject')){
            if(e.target.value !== ''){
                setSubj(true);
            } else {
                setSubj(false);
            }
        }
        if(e.target.classList.contains('message')){
            if(e.target.value !== ''){
                setMesCont(true);
            } else {
                setMesCont(false);
            }
        }

    }

    const displaySend = () => {
        if(fname && lname && emaila && subj && messageCont){
            document.querySelector('.backnforth').style= 'transform: translateY(0%) !important;'
        } else{
            document.querySelector('.backnforth').style= 'transform: translateY(100%) !important;'
        }
    }

    const handleSubmit = (e) => {
        if(fname && lname && emaila && subj && messageCont){
            setSubmitted(true);
            e.preventDefault();
            emailjs.sendForm('service_zjmd6go', 'template_txv4cip', e.target, 'user_ry783XREfihZmDcU6BaDw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        } else {
            setSubmitted(false);
            console.log(isSubmitted);
        }
    }

    const checkValidEmail = () => {
        let emailVal = document.querySelector('.email');
        if(emailVal.value.includes('@' && '.') ){
            setEmail(true);
            document.querySelector('.emailerr').style='display:none'
        } else {
            document.querySelector('.emailerr').style='display:inline'
        }
    }

    return (
        <section id="about_section" className="about_section">
            <div className="section_split one">
                <h1>
                    A Little About Me
                </h1>
                <p>
                    I am based in the <span className="keyword changing_text">Inland Empire</span> and am a happily married <span className="keyword changing_text">father of three</span>! I <span className="keyword changing_text">love hobbies</span> like guitar & tech, which led me to find code, get my degree, and get my dream job as a front end web developer! I <span className="keyword changing_text">love to learn</span> new technologies on my free time to strengthen my <span className="keyword changing_text">development & design</span> skills! 
                </p>
            </div>
            <div className="section_split two">
                <h1>
                    Lets Get in Touch! 
                </h1>
                <form id="form_area" onSubmit={handleSubmit}>

                    <h1>Lets Chat!</h1>

                    <span>
                        <input className='fname' onChange={handleChange} placeholder="First Name" name='fname'></input>
                        <input className='lname' onChange={handleChange} placeholder="Last Name" name='lname'></input>
                    </span>
                    <p className="emailerr">*Please enter a valid email</p>
                    <input className='email' onChange={handleChange} placeholder="Email Address" name='email'></input>
                    <input className='subject' onChange={handleChange} placeholder="Subject" name='subject'></input>
                    <textarea className='message' onChange={handleChange} placeholder="Message" name='message'></textarea>

                    <span  className="backnforth">
                        <input type="submit" placeholder="Send it!"></input>
                    </span>


                </form>
            </div>
        </section>
    )
}
