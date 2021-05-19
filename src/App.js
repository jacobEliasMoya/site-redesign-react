import './styles/app.css';
import WelcomeSec from './WelcomeSec';
import Navmenu from './Navmenu';
import MainNav from './Mainnav';

import {React} from 'react';


const App = () => {

  const triggerNav = () =>{
    const navelm = document.querySelector('.toggle_navigation');
    if(!navelm.classList.contains('triggered')){
      navelm.style.width='100vw';
      navelm.style.height='100vh';
      navelm.style.borderRadius='0%';
      navelm.style.opacity='1';
      navelm.classList.add('triggered')
    } else {
      navelm.style.opacity='0';
      navelm.style.width='0vw';
      navelm.style.height='0vh';
      navelm.style.borderRadius='50%';
      navelm.classList.remove('triggered')

    }
  }

  return (
    <div className="App">
      <MainNav onClick={triggerNav}/>
      <WelcomeSec />
      <Navmenu />
    </div>
  );
}

export default App;
