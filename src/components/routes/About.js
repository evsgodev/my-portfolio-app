import React from "react";
import Header from "../layout/header/Header";
import Intro from "../layout/intro/Intro";
import Footer from "../layout/footer/Footer";
import Experience from "../containers/experiance/Experience";
import AboutContent from "../layout/AboutContent";
import styled from "styled-components";

const AboutIntro = styled(AboutContent)`
  padding-top: 0;
  margin-bottom: 0;
`;

const About = () => {
    return (
        <div className="page-wrapper">
            <Header toggleLinkPath="/" toggleLinkText="About" secondary={true}/>
            <Intro title="About" innerPage="true" modifiers={['intro--page']}>
                <AboutIntro />
            </Intro>
            <main className={'page-content'}>
                <Experience />
            </main>
            <Footer />
        </div>
    )
}

export default About;
