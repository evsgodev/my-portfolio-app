import React from "react";
import Header from "../layout/header/Header";
import Intro from "../layout/intro/Intro";

function Home() {
    return (
        <div className="page-wrapper">
            <Header toggleLinkPath="/about" toggleLinkText="Portfolio" />
            <Intro title="Portfolio" />
        </div>
    )
}

export default Home;
