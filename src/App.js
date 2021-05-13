// mainlogo for header
import Logo from './images/logo.png';
import './styles/app.css';


function App() {
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
