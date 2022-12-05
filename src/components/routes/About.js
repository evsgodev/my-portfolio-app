import React from "react";
import Header from "../layout/header/Header";
import Intro from "../layout/intro/Intro";

function About() {
    return (
        <div className="page-wrapper">
            <Header toggleLinkPath="/" toggleLinkText="About" />
            <Intro title="About" page="true" />
        </div>
    )
}

export default About;
