import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './navElements';
import acm from '../assets/AcmTxtLogo.jpg'
import './nav.css';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/' className='logo'><img src={acm} alt="acm logo" className='logo'/></NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/events'>Events</NavLink>
                    <NavLink to='/become-member'>Become a Member</NavLink>
                </NavMenu>

            </Nav>
        </>
    )
}

export default Navbar;