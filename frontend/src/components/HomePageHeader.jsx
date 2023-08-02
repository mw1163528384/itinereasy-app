import React, { useState, useEffect } from 'react';
import menu_logo from '../assets/images/menu-logo.png';
import { Menubar } from './MenuBar';
import setting_logo from '../assets/images/setting-logo.png';
import { OptionMenu } from './OptionMenu';


function MainPageHeader({generatedItinerary}) {
  const [isMenubarOpen, setMenubarOpen] = useState(false);
  const [isOptionMenuOpen, setOptionMenuopen] = useState(false);

  const toggleMenubar = () => {
    setMenubarOpen(!isMenubarOpen)
  }

  const toggleOptionMenu = () => {
    setOptionMenuopen(!isOptionMenuOpen)
  }

  return (
    <div>
      <div className='homepage-header-container'>
        <header>
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

        </header>
        {isMenubarOpen && <Menubar handleCloseMenuClick={toggleMenubar}/>}
        {isOptionMenuOpen && <OptionMenu handleCloseClick={toggleOptionMenu}/>}
      </div>
    </div>
  );
}

export{ MainPageHeader };