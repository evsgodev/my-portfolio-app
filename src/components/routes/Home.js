import React from "react";
import Header from "../layout/header/Header";
import Intro from "../layout/intro/Intro";
import ProjectCovers from "../containers/project-covers/ProjectCovers";
import ProjectInterface from "../containers/ProjectInterface";
import Footer from "../layout/footer/Footer";

function Home() {
    return (
        <div className={'page-wrapper'}>
            <Header toggleLinkPath="/about" toggleLinkText="Portfolio" />
            <Intro title="Portfolio" />
            <ProjectInterface />
            <main className={'page-content'}>
                <ProjectCovers title={'Projects'} />
            </main>
            <Footer />
        </div>
    )
}

export default Home;
