// mainlogo for header
import Logo from './images/logo.png';
import './styles/app.css';

import {useEffect} from 'react';


const App = () => {

  const colorKeywords = () =>{
    setTimeout(()=>{
      let keys = document.querySelectorAll('.keyword');
      keys.forEach(key=>{
        key.style.color='#ef5da8';
      })
    },500)

  }

  const randomSizer = (bub) =>{
    const dims = ['1rem',"2rem","3rem","4rem"];
    let selectedDim = dims[Math.floor(Math.random() * dims.length)]
    bub.style.width = selectedDim;
    bub.style.height = selectedDim;
  }

  const lightbubbler = () =>{
    setInterval(() => {
      let bubble = document.createElement("DIV");
      bubble.classList.add('bubble','light');
      bubble.style.position='absolute';
      randomSizer(bubble);
      document.querySelector('.welcome_intro .message').appendChild(bubble);
    }, 1000);
  }

  const darkbubbler = () =>{
    setInterval(() => {
      let bubble = document.createElement("DIV");
      bubble.classList.add('bubble','dark');
      bubble.style.position='absolute';
      bubble.style.backgroundColor='#110042';
      randomSizer(bubble);
      document.querySelector('.welcome_intro .greeting').appendChild(bubble);
    }, 1000);
  }
  
  useEffect(() => {
    lightbubbler();
    colorKeywords();
    darkbubbler();
  }, [])

  return (
    <div className="App">
      <section className='welcome_section'>
        <nav>
          <img src={Logo} alt="jmoya_logo"/>
          <div>
            <i className="fa fa-bars"></i>
          </div>
        </nav>
        <section className='welcome_text'>
          <h1>
            <span className='bigtext'>Hey</span>, I am <span className='keyword changing_text'>Jacob Moya</span>!
          </h1>
          <h1 className='welcome_description'>
            I am a <span className='keyword changing_text'>Front-End Developer</span>, with a keen eye for design! 
          </h1>
        </section>
        <section className='welcome_intro'>
          <div className='greeting'>
            <h1>
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
    </div>
  );
}

export default App;
