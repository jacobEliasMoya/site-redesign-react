import './styles/app.css';
import WelcomeSec from './WelcomeSec';
// import Navmenu from './Navmenu';
import {useEffect} from 'react';


const App = () => {

  const navButton = document.querySelectorAll('.triggeroverlay');

  const triggerNav = () =>{
    setTimeout(() => {
      navButton.forEach(nav=>{
        console.log(nav);
      })
    }, 10);

  }

  // useEffect(() => {
  //   triggerNav();

  // }, [])

  return (
    <div className="App">
    
      <WelcomeSec />


    </div>
  );
}

export default App;
