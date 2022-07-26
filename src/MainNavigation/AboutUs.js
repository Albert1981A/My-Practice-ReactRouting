import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function AboutUsComp() {

    const navigate = useNavigate();


    const toContactUs = () => {
        //Some code....
        navigate("/contact")
    }

    return (
        <div style={{ margin: "auto", width: "600px", height: "400px", backgroundColor: "red" }}>
            <h1>About us Page Header</h1>

            <Link to="/contact">Contact Us</Link> <br /><br />
            <input type="button" value="Contact Us" onClick={toContactUs} />

            <h1>About us Page Footer</h1>
        </div>
    );
}

export default AboutUsComp;