import React from 'react';
import './About.css';
import presImg from '../Components/assets/officerImgs/kalaPres.jpg';
import vpImg from '../Components/assets/officerImgs/BroxstonVP.jpg';
import secretary from '../Components/assets/officerImgs/elinSecretary.jpeg';
import treasurer from '../Components/assets/officerImgs/MylesTreasurer.jpg';
import InfoBar from '../Components/InfoBar/index';

const About = () => {
    return (
        <div className = "about">
            <div className = "general">
                <header className = "aboutTitle">About our Chapter</header>
                <body>ACM is a blooming community of bright minds discovering the world of technology; 
                    growing expanding and innovating are key terms that describe 
                    what we do in ACM. During our meetings, guest speakers and voted 
                    topics of discussion are included in our meeting. 
                    Collaborating and innovating games, as well as learning about careers in 
                our field.</body>
            </div>
            <div className = "board">
                <div className="title">
                    <header>Leading Officers</header>
                </div>
                <div className="rowOfficers">
                    {/* President */}
                    <div className = "officer">
                        <img src={presImg} className = "boardImg" alt = "Chair Officer"/>
                        <h1>Chair</h1>
                        <p>Kala Meyer</p>
                    </div>
                    {/* Vice */}
                    <div className = "officer">
                        <img src={vpImg} className = "boardImg" alt = "Vice Chair officer"/>
                        <h1>Vice Chair</h1>
                        <p>Broxton Butler</p>
                    </div>
                    {/* Secretary */}
                    <div className = "officer">
                        <img src={secretary} className = "boardImg" alt = "Secretary"/>
                        <h1>Secretary</h1>
                        <p>Elin Gebrowsky</p>
                    </div>
                    {/* Treasurer */}
                    <div className = "officer">
                        <img src={treasurer} className = "boardImg" alt = "Treasurer"/>
                        <h1>Treasurer</h1>
                        <p>Myles Nieman</p>
                    </div>
                </div>
            </div>
            <InfoBar/>
        </div>
    );
};

export default About;
