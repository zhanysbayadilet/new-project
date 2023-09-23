import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {paths} from "../_helpers/paths";
import HomePage from "../pages/HomePage/HomePage";

const Root = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route path={paths.homePage} element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Root;