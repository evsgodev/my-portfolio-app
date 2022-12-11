import React from "react";
import Header from "../layout/header/Header";
import Intro from "../layout/intro/Intro";
import Footer from "../layout/footer/Footer";
import Experience from "../containers/experiance/Experience";
import AboutContent from "../layout/AboutContent";

function About() {
    return (
        <div className="page-wrapper">
            <Header toggleLinkPath="/" toggleLinkText="About" secondary={true}/>
            <Intro title="About" innerPage="true" modifiers={['intro--page']}>
                <AboutContent />
            </Intro>
            <main className={'page-content'}>
                <Experience />
            </main>
            <Footer />
        </div>
    )
}

export default About;
