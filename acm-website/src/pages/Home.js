import './Home.css';
import React from 'react';
import RecentEvent from '../Components/recentEvent';
import InfoBar from '../Components/InfoBar/index';
import acmImg from '../Components/assets/reflectionProjection/IMG_3877.jpg';

const Home = () => {
  return (
    <div className="Home">
      <div className="space"/>
      <div className="mainHome">
        <div className = "introContainer">
          <div className="blurb">
            <header>Welcome to ACM @ IT!</header>
            <body>Here at our Indiana Tech chapter for the Association of Computing Machinery, we’re dedicated to advancing the science, engineering, and application of computing.
              We meet on the third Friday of every month at 12:15 PM this semester! 
            </body>
          </div>
            <img src={acmImg} alt="img of members talking" className='acmImg'/>       
          </div>
        
        <div className = 'recentEventBlurb'>
          <RecentEvent/>
        </div>
      </div>
      <InfoBar />
    </div>
  );

};

export default Home;
