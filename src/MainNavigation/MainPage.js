import React from 'react';
import { Link } from 'react-router-dom'
import Routing from '../Routing/Routing.js';
// import AboutUsComp from './AboutUs.js';
// import ContactUsComp from './ContactUs';

function MainPageComp() {
    return (
        <div className="App">
            <h1>Welcome to our SPA (Single Page Application) header</h1>

            <Link to="/contact">To Contact Us</Link><br />
            <Link to="/about">To About Us</Link><br />

            <Routing />

            <h1>Welcome to our SPA (Single Page Application) Footer</h1>
        </div>
    );
}

export default MainPageComp;