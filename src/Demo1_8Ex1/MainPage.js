import React from "react";
import { Routes ,Route, Link } from "react-router-dom";
import ContactUsComp from "../MainNavigation/ContactUs";
import UserComp from "./UserComp";
import UsersComp from "./UsersComp";

function MainPage2Comp() {

    return (
        <div>
            <h1>Main Page Header</h1>

            <Link to="/users">All Users</Link> <br />
            <Link to="/f">All f</Link> <br />

            <Routes>
            <Route path="/f" element={<ContactUsComp />} />
                <Route path="/users" element={<UsersComp />} />
                <Route path="/user/:id" element={<UserComp />} />
            </Routes>

            <h1>Main Page Footer</h1>
        </div>
    );
}

export default MainPage2Comp;

//style={{ margin: "auto", width: "600px", height: "400px", backgroundColor: "red" }}