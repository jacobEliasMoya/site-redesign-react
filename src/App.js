import './styles/app.css';
// import Spacer from './Spacer';
import React from 'react';
import WelcomeSec from './WelcomeSec';
import PortfolioSection from './PortfolioSection';
import MainNav from './Mainnav';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';
import MainFooter from './MainFooter';



const App = () => {
 
  return (
    <div className="App">
      <MainNav />
      <WelcomeSec />
      <SkillsSection />
      <PortfolioSection />
      <AboutSection />
      <MainFooter />
    </div>
  );
}

export default App;

