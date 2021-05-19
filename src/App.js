import './styles/app.css';
import WelcomeSec from './WelcomeSec';
import Navmenu from './Navmenu';
import MainNav from './Mainnav';
// import SkillsSection from './SkillsSection';

import {React} from 'react';


const App = () => {
  return (
    <div className="App">
      <MainNav />
      <WelcomeSec />
      <Navmenu />
    </div>
  );
}

export default App;
