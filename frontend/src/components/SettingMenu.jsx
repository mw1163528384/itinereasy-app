import React from 'react';
import '../styles/NewTrip.css';
import close_icon from '../assets/images/close-icon.png';
import storage_icon from '../assets/images/storage-icon.png';
import security_icon from '../assets/images/security-icon.png';
import language_icon from '../assets/images/lanuage-icon.png';
import help_icon from '../assets/images/help-icon.png';
import about_icon from '../assets/images/about-icon.png';

const OptionMenu = ({handleCloseSettingClick}) => {
    return (
        <div>
            <div className='body'>
                <header className='settingMenu-header-container'>
                    {/* To Yingyu: if you dont want the title and button tgt, just shift the </h3> beside the title */}
                    <h3>Settings
                        <button onClick={handleCloseSettingClick}>
                            <img src={close_icon} alt='close-icon' />
                        </button>
                    </h3>
                </header>

                <footer className='settingMenu-footer-conatiner'>
                    <button className='dataStorage-container'>
                        <img src={storage_icon} alt='storage-icon' />
                        Data and Storage
                    </button>

                    <button className='privacySecurity-container'>
                        <img src={security_icon} alt='security-icon' />
                        Privacy and Security
                    </button>

                    <button className='language-container'>
                        <img src={language_icon} alt='language-icon' />
                        Language
                    </button>

                    <button className='help-container'>
                        <img src={help_icon} alt='help-icon' />
                        Help
                    </button>

                    <button className='about-container'>
                        <img src={about_icon} alt='about-icon' />
                        About
                    </button>
                </footer>
            </div>
        </div>
    );
}

export { OptionMenu }