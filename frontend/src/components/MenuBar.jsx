import React from 'react';
import '../styles/MenuBar.css';
import { useNavigate } from "react-router-dom";
import left_icon from '../assets/images/left-icon.png';
import search_icon from '../assets/images/search-icon.png';
import setting_icon from '../assets/images/setting-icon.png';
import signout_icon from '../assets/images/signout-icon.png';

const Menubar = ({ handleMenuClose, handleSettingOpen }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/LoginPage');
      };
    
    return (
        <div>
            <div className='body'>
                <header className='menuBar-header-container'>
                    <button onClick={handleMenuClose}>
                        <img src={left_icon} alt='left-icon'/>
                    </button>

                    <h1>Itineraries</h1>

                    <button>
                        <img src={search_icon} alt='search-icon'/>
                    </button>
                </header>

                <div className='itineraries-container'>

                </div>

                <footer className='menuBar-footer-container'>
                    <div className='setting-container'>
                        <button onClick={handleSettingOpen}>
                            <img src={setting_icon} alt='setting-icon'/>
                        </button>
                        <p>Settings</p>
                    </div>

                    <div className='signout-container' onClick={handleLogOut}>
                        <button>
                            <img src={signout_icon} alt='signout-icon'/>
                        </button>
                        <p>Log Out</p>
                    </div>

                </footer>
            </div>
        </div>
    );
}

export { Menubar }
