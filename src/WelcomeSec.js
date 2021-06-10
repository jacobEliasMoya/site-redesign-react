import React from 'react'
import {useEffect} from 'react';


export default function WelcomeSec() {

    const colorKeywords = () =>{
        setTimeout(()=>{
          let keys = document.querySelectorAll('.keyword');
          keys.forEach(key=>{
            key.style.color='#ef5da8';
          })
        },500)
    
      }
    
      const randomSizer = (bub) =>{
        const dims = ['4rem',"5rem","6rem","7rem"];
        const location = ["10%","20%","30%","40%","50%","60%","70%","80%","90%"]
        let selectedDim = dims[Math.floor(Math.random() * dims.length)];
        let selectedLocation = location[Math.floor(Math.random() * location.length)];
        bub.style.width = selectedDim;
        bub.style.height = selectedDim;
        bub.style.left = selectedLocation;
      }
    
      const lightbubbler = () =>{
        let int = setInterval(() => {
          let bubble = document.createElement("DIV");
          bubble.classList.add('bubble','light');
          bubble.style.position='absolute';
          randomSizer(bubble);
          document.querySelector('.welcome_intro').appendChild(bubble);
        }, 2000);
        setTimeout(()=>{
          clearInterval(int)
        },10000)
      }
    
      const darkbubbler = () =>{
        let int = setInterval(() => {
          let bubble = document.createElement("DIV");
          bubble.classList.add('bubble','dark');
          bubble.style.position='absolute';
          bubble.style.backgroundColor='#110042';
          randomSizer(bubble);
          document.querySelector('.welcome_intro').appendChild(bubble);
        }, 3000);
        setTimeout(()=>{
          clearInterval(int)
        },10000)
      }
      
      


      useEffect(() => {
        lightbubbler();
        colorKeywords();
        darkbubbler();
      })

    return (
    <section className='welcome_section' id="welcome_section">
        <nav></nav>
        <section className='welcome_text'>
          <h1>
            <span className='bigtext'>Hey</span>, I am <span className='keyword changing_text'>Jacob Moya</span>!
          </h1>
          <h1 className='welcome_description'>
            I am a <span className='keyword changing_text'>Front-End Developer</span> with a keen eye for design! 
          </h1>
        </section>
        <section className='welcome_intro'>
          <div className='greeting'>
            <h1 className="keyword">
              Nice to meet you.
            </h1>
          </div>
          <div className='message'>
            <p>
              I am a passionate Front-End developer! 
              From a wireframe all the way to launch, 
              I diligintly build beautiful sites with 
              a variety of different toolsets... Read
              more about the tech I use <span className='keyword changing_text'>below</span>. 
            </p>
          </div>
        </section>

    </section>

    )
}
