import React from 'react';
import './modal.css';


const Event1 = ({open, onClose}) => {
    if(!open) return null;
    return(
        <div>
            <div onClick={onClose} className='overlay'>
                <div onClock={(e) => {e.stopPropagation()}} className="modalContainer">
                    <div className="modalRight">
                        <p onClick={onClose} className="closeBtn">X</p>
                        <div className='contentContainer'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event1;
