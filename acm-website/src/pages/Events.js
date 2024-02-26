import React, {useState} from 'react';
import './Events.css';
import InfoBar from '../Components/InfoBar/index';
import Modal from '../Components/Events/event1Modal.jsx';


const Events = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    return(
        <div className="eventsPage">
            <div className="space"/>
            <div className="eventsInfo">
                {/* start modals here with blurbs shown but modal hidden until on click */}
                <div className="fallEvents">
                    <div className='event'>
                        <Modal id='1' open={isOpen1} onClose={() => setIsOpen1(false)}/>
                        <div>
                            <h1>Reflection Projection Conference</h1>
                            <div className="containerEvents">
                                <div className="info">
                                    <p>The Reflection Projections Conference is a yearly conference hosted by the ACM club of the Univeristy of Illinois Urbana-Champaigne. </p>
                                </div>
                                <div className="moreBtnContainer">
                                    <button className="moreBtn" onClick={() => setIsOpen1(true)}>See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='event'>
                        <Modal id='2' open={isOpen2} onClose={() => setIsOpen2(false)}/>
                        <div>
                            <h1>Game Jam</h1>
                            <div className="containerEvents">
                                <div className="info">
                                    <p>The ACM Game Jam is an edcuation event for students to come together and actively create a small videogame. </p>
                                </div>
                                <div className="moreBtnContainer">
                                    <button className="moreBtn" onClick={() => setIsOpen2(true)}>See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="springEvents">
                    
                </div> */}
            </div>
            <div>
                <InfoBar/>
            </div>
        </div>
    );
};

export default Events;