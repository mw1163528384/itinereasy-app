import React, { useState } from 'react';
import '../styles/HomePageHeader.css';
import menu_logo from '../assets/images/menu-logo.png';
import { Menubar } from './MenuBar';
import setting_logo from '../assets/images/setting-logo.png';
import { OptionMenu } from './OptionMenu';
import { SettingMenu } from './SettingMenu';

function HomePageHeader({generatedItinerary}) {
  const [isMenubarOpen, setMenubarOpen] = useState(false);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isOptionMenuOpen, setOptionMenuOpen]  = useState(false);

  const toggleMenubar = () => {
    setMenubarOpen(!isMenubarOpen);
  }

  const handleSettingOpen = () => {
    setMenubarOpen(false);
    setSettingOpen(true);
  }

  const handleSettingClose = () => {
    setMenubarOpen(true);
    setSettingOpen(false);
  }

  const toggleOptionMenu = () => {
    setOptionMenuOpen(!isOptionMenuOpen);
  }

  return (
    <div>
      <header>
        {isMenubarOpen || isSettingOpen || isOptionMenuOpen ? (
        <div>
          {isMenubarOpen && <Menubar handleMenuClose={toggleMenubar} handleSettingOpen={handleSettingOpen}/>}
          {isSettingOpen && <SettingMenu handleSettingClose={handleSettingClose}/>}
          {isOptionMenuOpen && <OptionMenu handleCloseClick={toggleOptionMenu}/>}
        </div>
      ) : (
        <div className='homepage-header-container'>
          <button onClick={toggleMenubar}>
              <img src={menu_logo} alt='menu-logo' />
          </button>

          {generatedItinerary && generatedItinerary.location ? (
          <>
              <h1>{generatedItinerary.location}</h1>
              <h5>{`${generatedItinerary.travelingDays} days`}</h5>
          </>
          ) : (
          <h1>Itinerary</h1>
          )}
          
          <button onClick={toggleOptionMenu}>
              <img src={setting_logo} alt='setting-logo' />
          </button>
        </div>
        )}
      </header>
    </div>
  );
}

export{ HomePageHeader };
