import React from 'react';
import './infoBar.css';
import discordIcon from '../assets/discordLogo.png';
import instaIcon from '../assets/insta.png';

const InfoBar = () => {
    return(
        <footer className="container">
            <div className='infoText'>
                <p>Created by Kala Meyer for the ACM Chapter at Indiana Tech</p>
            </div>
            <div className="socials">
                <div className='discord'>
                    <img href='https://discord.gg/52XkTDQRVZ' src={discordIcon} alt='Discord Logo' className='logoInfo'/>
                </div>
                <div className='insta'>
                    <img href='https://www.instagram.com/indianatech.acm/' src={instaIcon} alt='Instagram Logo' className='logoInfo'/>
                </div>
            </div>
        </footer>
    );
};

export default InfoBar;


