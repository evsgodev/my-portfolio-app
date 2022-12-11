import React from "react";

function AboutContent() {
    return (
        <section className="section section-about">
            <div className="container">
                <div className="container__center">
                    <div className="section__content">
                        <h2 className="section__title">
                            <div className="section__title-text">
                                Hello<span className="section__title-line section__title-line--after"></span>
                            </div>
                        </h2>
                        <p>My name is Evgeny Staroverov.</p>
                        <p>I’m front-End Developer from Russia, Krasnoyarsk.</p>
                        <p>I have more than <span className="js-exp-date" data-start-date="2015"></span>years of
                            IT experience.</p><br />
                        <p>I have experience in the following:</p>
                        <ul>
                            <li>CSS3, SCSS (Sass), CSS Grid, Styled Components, CSS animations and transforms</li>
                            <li>JavaScript, TypeScript, JSX</li>
                            <li>Figma, Zeplin, Adobe Photoshop, Adobe Illustrator.</li>
                            <li>Gulp, Webpack, Npm, Yarn Packages.</li>
                            <li>Git, Jira, and more tools ...</li>
                        </ul>
                        <br />
                        <h3>How to contact me</h3>
                        <p>Telegram @evgenystaroverov</p>
                        <p>Skype evst177</p><br />
                        <h3>I'm on social networks</h3>
                        <p>
                            <a className="link-under" href="https://www.linkedin.com/in/evgst/"><span>Linkedin</span></a>
                            <a className="link-under" href="https://github.com/evsgodev"><span>Github</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContent;
