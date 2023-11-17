import './BecomeMember.css';
import {JoinForm} from '../Components/JoinForm.js';
import messyDoodle from '../Components/assets/MessyDoodle.png';
import floatDoodle from '../Components/assets/FloatDoodle.png';
import InfoBar from '../Components/InfoBar/index';

const BecomeMember = () => {
    return (
        <>
            <div className="BecomeMember">
                <div className = "Info">
                    <header>Becoming a Member!</header>
                    <body>
                        It looks like you're wanting to become an ACM member! If that is the case then please make sure to fill out the form 
                        below! We just ask for your name, Indiana Tech email address, year, major, and gender! Be sure to join our discord
                         server for important updates and to connect with fellow members, and our social media to stay updated on our events and posts! Both can be found
                          at the end of the form by clicking on the platforms' respective image.
                    </body>
                </div>
                <div className = "FormContainer">
                    <div className="doodleContain1">
                        <div className="doodle1">
                            <div>
                                <img src={floatDoodle} alt="floating girl"/>
                            </div>
                        </div>
                    </div>
                    <div className="MemberForm">
                        <JoinForm />
                    </div>
                    <div className="doodle2">
                        <img src={messyDoodle} alt="guy with papers"/>
                    </div>
                </div>
            </div>
            <InfoBar/>
        </>
    );
};

export default BecomeMember;
