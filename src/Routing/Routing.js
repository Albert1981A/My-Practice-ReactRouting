import React from 'react';
import { Routes, Route } from 'react-router-dom'
import AboutUsComp from '../MainNavigation/AboutUs';
import ContactUsComp from '../MainNavigation/ContactUs';


function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ContactUsComp />} />
                <Route path="/contact" element={<ContactUsComp />} />
                <Route path="/about" element={<AboutUsComp />} />
            </Routes>
        </div>
    );
}

export default Routing;