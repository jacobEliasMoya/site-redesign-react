import './styles/app.css';
import WelcomeSec from './WelcomeSec';
import PortfolioSection from './PortfolioSection';
import MainNav from './Mainnav';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';

// import Spacer from './Spacer';
import React from 'react';


const App = () => {
 
  return (
    <div className="App">
      <MainNav />
      <WelcomeSec />
      <SkillsSection />
      <PortfolioSection />
      <AboutSection />
    </div>
  );
}

export default App;

