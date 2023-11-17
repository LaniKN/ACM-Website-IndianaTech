import React from 'react';
import './Events.css';
import InfoBar from '../Components/InfoBar/index';



const Events = () => {
    return(
        <div className="EventsPage">
            <div className="EventsInfo">
                {/* start modals here with blurbs shown but modal hidden until on click */}
                <div className="fallEvents">

                </div>
                <div className="springEvents">
                    
                </div>

            </div>
            <InfoBar />
        </div>
    );
};

export default Events;