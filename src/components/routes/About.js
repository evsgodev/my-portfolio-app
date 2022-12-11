import React, {useState} from "react";
import Header from "../layout/header/Header";
import Intro from "../layout/intro/Intro";
import Footer from "../layout/footer/Footer";
import Experience from "../containers/experiance/Experience";
import AboutContent from "../layout/AboutContent";
import styled from "styled-components";
import {experiencesData} from "../../assets/data";

const AboutIntro = styled(AboutContent)`
  padding-top: 0;
  margin-bottom: 0;
`;

const About = () => {
    const [expData] = useState(experiencesData);

    return (
        <div className="page-wrapper">
            <Header toggleLinkPath="/" toggleLinkText="About" secondary={true}/>
            <Intro title="About" innerPage="true" modifiers={['intro--page']}>
                <AboutIntro />
            </Intro>
            <main className={'page-content'}>
                <Experience rows={expData} />
            </main>
            <Footer />
        </div>
    )
}

export default About;
