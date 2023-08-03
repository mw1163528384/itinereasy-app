import React from 'react';
import '../styles/SettingMenu.css';
import close_icon from '../assets/images/close-icon.png';
import storage_icon from '../assets/images/storage-icon.png';
import security_icon from '../assets/images/security-icon.png';
import language_icon from '../assets/images/language-icon.png';
import help_icon from '../assets/images/help-icon.png';
import about_icon from '../assets/images/about-icon.png';

const SettingMenu = ({ handleSettingClose }) => {
    return (
        <div>
            <div className='body'>
                <header className='settingMenu-header-container'>
                    {/* To Yingyu: if you dont want the title and button tgt, just shift the </h3> beside the title */}
                    <h3>Settings
                        <button onClick={handleSettingClose}>
                            <img src={close_icon} alt='close-icon' />
                        </button>
                    </h3>
                </header>

                <footer className='settingMenu-footer-conatiner'>
                    <div className='dataStorage-container'>
                        <button>
                            <img src={storage_icon} alt='storage-icon' />
                        </button>
                        <p>Data and Storage</p>
                    </div>

                    <div className='privacySecurity-container'>
                        <button>
                            <img src={security_icon} alt='security-icon' />
                        </button>
                        <p>Privacy and Security</p>
                    </div>

                    <div className='language-container'>
                        <button>
                            <img src={language_icon} alt='language-icon' />
                        </button>
                        <p>Language</p>
                    </div>

                    <div className='help-container'>
                        <button>
                            <img src={help_icon} alt='help-icon' />
                        </button>
                        <p>Help</p>
                    </div>

                    <div className='about-container'>
                        <button className='about-container'>
                            <img src={about_icon} alt='about-icon' />
                        </button>
                        <p>About</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export { SettingMenu }