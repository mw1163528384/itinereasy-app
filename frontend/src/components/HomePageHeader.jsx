import React, { useState } from 'react';
import '../styles/HomePageHeader.css';
import Modal from 'react-modal';
import menu_logo from '../assets/images/menu-logo.png';
import { Menubar } from './MenuBar';
import setting_logo from '../assets/images/setting-logo-btn.png';
import { OptionMenu } from './OptionMenu';
import { SettingMenu } from './SettingMenu';

Modal.setAppElement('#root') // this line is important for accessibility purposes

function HomePageHeader({generatedItinerary, handleRegenerateClick}) {
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
        <div className='homepage-header-container'>
          <button className="menu-logo-btn" onClick={toggleMenubar}>
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
          
          <button className="setting-logo-btn" onClick={toggleOptionMenu}>
              <img src={setting_logo} alt='setting-logo' />
          </button>

          <Modal
            isOpen={isMenubarOpen}
            onRequestClose={toggleMenubar}
            overlayClassName="overlay-sidebar"
            className="sidebarModal"
          >
            <div className='sidebarModal-content'>
              <Menubar handleMenuClose={toggleMenubar} handleSettingOpen={handleSettingOpen}/>
            </div>
          </Modal>

          <Modal
            isOpen={isSettingOpen}
            onRequestClose={handleSettingClose}
            overlayClassName="overlay-sidebar"
            className="sidebarModal"
          >
            <SettingMenu handleSettingClose={handleSettingClose}/>
          </Modal>

          <Modal
            isOpen={isOptionMenuOpen}
            onRequestClose={toggleOptionMenu}
            overlayClassName="overlay-sidebar"
            className="optionMenuModal"
          >
            <div className='optionMenuModal-content'>
              <OptionMenu handleCloseClick={toggleOptionMenu} handleRegenerateClick={handleRegenerateClick}/>
            </div>
          </Modal>

        </div>

      </header>
    </div>
  );
}

export { HomePageHeader };