import React from "react";
import "./Intro.module.scss";
import classes from "./Intro.module.scss";

const Intro = ({ children, title, innerPage, modifiers }) => {
    const introClass = [classes.intro];

    if (modifiers) {
        modifiers.forEach(modifier => introClass.push(classes[modifier]));
    }

    return (
        <div className={`${introClass.join(' ')}`}>
            <div className={classes['intro__bg']}>
                <canvas className={classes['intro__stars']} id="stars"></canvas>
            </div>
            <div className={classes['intro-caption']}>
                <div className={classes['intro-caption__title']}>{title}</div>
            </div>
            { innerPage ?
                children
                :
                <div className={classes['intro__content']}>
                    <h1 className={classes['intro__title']}>
                        <span className={classes['intro__title-letters']}>Hey there! I' m Evgeny!</span>&nbsp;
                        <span className={classes['intro__title-letters']}>The Front-End</span>&nbsp;
                        <span className={classes['text-type']}>Developer</span>
                    </h1>
                    <link className={`${classes['intro__scroll-btn']} js-scroll-link is-visible`} to="#content"></link>
                </div>
            }
        </div>
    )
}

export default Intro;
