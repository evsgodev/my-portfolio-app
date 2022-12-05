import React from "react";
import Header from "../layout/header/Header";
import Intro from "../layout/intro/Intro";
import ProjectCovers from "../containers/project-covers/ProjectCovers";

function Home() {
    return (
        <div className={'page-wrapper'}>
            <Header toggleLinkPath="/about" toggleLinkText="Portfolio" />
            <Intro title="Portfolio" />
            <main className={'page-content'}>
                <ProjectCovers title={'Projects'} />
            </main>
        </div>
    )
}

export default Home;
