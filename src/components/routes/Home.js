import React from "react";
import Header from "../layout/header/Header";

function Home() {
    return (
        <div className="page-wrapper">
            <Header toggleLinkPath="/about" toggleLinkText="Portfolio" />
        </div>
    )
}

export default Home;
