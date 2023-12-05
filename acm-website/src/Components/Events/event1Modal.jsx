import React from 'react';
import './modal.css';
import reflectionProjectionImg from '../assets/reflectionProjection/IMG_3877.jpg';
import gameJamImg1 from '../assets/gameJam/IMG_8604.JPEG';
import gameJamImg2 from '../assets/gameJam/IMG_8606.JPEG';
import gameJamImg3 from '../assets/gameJam/discussion.JPEG';
import gameJamImg4 from '../assets/gameJam/presentation.jpg';

var event = require('./events.json');

var slideIndex = 1;


const Event = ({id, open, onClose}) => {
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }
    
    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }
    
    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("imgSlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }
    
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
