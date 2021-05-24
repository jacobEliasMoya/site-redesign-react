import './styles/app.css';
import WelcomeSec from './WelcomeSec';
import PortfolioSection from './PortfolioSection';
import MainNav from './Mainnav';
import SkillsSection from './SkillsSection';
// import Spacer from './Spacer';
import React from 'react';


const App = () => {
 
  return (
    <div className="App">
      <MainNav />
      <WelcomeSec />
      <SkillsSection />
      <PortfolioSection />
    </div>
  );
}

export default App;

