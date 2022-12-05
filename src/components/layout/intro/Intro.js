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
