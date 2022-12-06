import React from "react";
import "./Intro.module.scss";
import classes from "./Intro.module.scss";
import About from "../About";

const Intro = props => {
    const modifiers = (() => {
        if (props.page) {
            return classes['intro--page'];
        }
    })();

    return (
        <div className={`${classes.intro} ${modifiers}`}>
            <div className={classes['intro__bg']}>
                <canvas className={classes['intro__stars']} id="stars"></canvas>
            </div>
            <div className={classes['intro-caption']}>
                <div className={classes['intro-caption__title']}>{props.title}</div>
            </div>
            {(() => {
                if (props.title.toLowerCase() === 'portfolio') {
                    return (
                        <div className={classes['intro__content']}>
                            <h1 className={classes['intro__title']}>
                                <span className={classes['intro__title-letters']}>Hey there! I' m Evgeny!</span>&nbsp;
                                <span className={classes['intro__title-letters']}>The Front-End</span>&nbsp;
                                <span className={classes['text-type']}>Developer</span>
                            </h1>
                            <link className={`${classes['intro__scroll-btn']} js-scroll-link is-visible`} to="#content"></link>
                        </div>
                    )
                }

                if (props.title.toLowerCase() === 'about') {
                    return (
                        <About />
                    )
                }
            })()}
        </div>
    )
}

export default Intro;
