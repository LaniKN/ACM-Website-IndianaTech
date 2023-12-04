import React from 'react';
import './modal.css';
import reflectionProjectionImg from '../assets/reflectionProjection/IMG_3877.jpg';
import gameJamImg1 from '../assets/gameJam/IMG_8604.JPEG';
import gameJamImg2 from '../assets/gameJam/IMG_8606.JPEG';

var event = require('./events.json');

const Event = ({id, open, onClose}) => {
    const arrPlace = id - 1;
    if(!open) return null;
    var contentArr = [
        (
        <div>
            <div onClick={onClose} className='overlay'>
                <div onClock={(e) => {e.stopPropagation()}} className="modalContainer">
                    <div className='contentContainer'>
                        <div className='eventImg'>
                            <p><img src={reflectionProjectionImg} alt={event[arrPlace].name} className='eventImgs'/></p>
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
                <div onClock={(e) => {e.stopPropagation()}} className="modalContainer">
                    <div className="modalRight">
                        <p onClick={onClose} className="closeBtn">X</p>
                        <div className='contentContainer'>
                            <div className='eventImg'>
                                <ul className="imgList">
                                    <li className="slide">
                                        <img src={gameJamImg1} alt={event[arrPlace].name} className='eventImgs'/>
                                    </li>
                                    <li className="slide">
                                        <img src={gameJamImg2} alt={event[arrPlace].name} className='eventImgs'/>
                                    </li>
                                </ul>
                            </div>
                            <div className='eventDesc'>
                                <h1>{event[arrPlace].name}</h1>
                                <p>{event[arrPlace].desc}</p>
                            </div>
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
