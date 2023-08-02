import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/NewTrip.css';
import left_icon from '../assets/images/left-icon.png';
import search_icon from '../assets/images/search-icon.png';
import setting_icon from '../assets/images/setting-icon.png';
import signout_icon from '../assets/images/signout-icon.png';

const Menubar = ({handleCloseMenuClick}) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='body'>
                <header className='menuBar-header-container'>
                    <button onClick={handleCloseMenuClick}>
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
                        <button onClick={handleCloseMenuClick}>
                            <img src={setting_icon} alt='setting-icon'/>
                        </button>
                    </div>

                    <div className='signout-container'>
                        <button>
                            <img src={signout_icon} alt='signout-icon'/>
                        </button>
                    </div>

                </footer>
            </div>
        </div>
    );
}

export { Menubar }
