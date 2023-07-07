import React from 'react';
import logo from "../../../assets/background.jpeg";
import "./about.sass"
import AboutDropdown from "./AboutComponents/aboutDropdown";

function About() {
    return (<div className="about-page">
        <div className="banner">
            <img src={logo} alt="PAYSAGE"/>
        </div>

        <AboutDropdown />
    </div>
)
}

export default About