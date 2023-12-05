import React from 'react';
import './modal.css';
import reflectionProjectionImg from '../assets/reflectionProjection/IMG_3877.jpg';
import gameJamImg3 from '../assets/gameJam/discussion.JPEG';

var event = require('./events.json');


const Event = ({id, open, onClose}) => {
    
    const arrPlace = id - 1;
    if(!open) return null;
    var contentArr = [
        (
        <div>
            <div onClick={onClose} className='overlay'>
                <div onClick={(e) => {e.stopPropagation()}} className="modalContainer">
                    <div className='contentContainer'>
                        <div className='eventImg'>
                            <img src={reflectionProjectionImg} alt={event[arrPlace].name} className='eventImgs'/>
                        </div>
                        <div className='eventDesc'>
                            <p onClick={onClose} className="closeBtn">X</p>
                            <h1>{event[arrPlace].name}</h1>
                            <p>{event[arrPlace].desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ),
        (
        <div>
            <div onClick={onClose} className='overlay'>
                <div onClick={(e) => {e.stopPropagation()}} className="modalContainer">
                    
                    <div className='contentContainer'>
                        <div className='eventImg'>
                            <img src={gameJamImg3} alt={event[arrPlace].name} className='eventImgs'/>
                        </div>
                        <div className='eventDesc'>
                            <p onClick={onClose} className="closeBtn">X</p>
                            <h1>{event[arrPlace].name}</h1>
                            <p>{event[arrPlace].desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        )
    ];


const modal = contentArr[arrPlace];
return (<>{modal}</>)
}

export default Event;
