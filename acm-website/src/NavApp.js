import React from 'react';
import Navbar from './Components/NavBar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './Components/scrollTop';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import BecomeMember from './pages/BecomeMember';

function Nav() {
    return (
        <Router>
            <Navbar/>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/events" element={<Events/>} />
                <Route path="/become-member" element={<BecomeMember/>} />
            </Routes>
        </Router>
    );

}

export default Nav;
