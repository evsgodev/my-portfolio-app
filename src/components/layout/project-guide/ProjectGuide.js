import classes from "./ProjectGuide.module.scss";
import {useState} from "react";

const ProjectGuide = props => {
    const { gridState } = props;
    const [ isVisible, setIsVisible ] = useState(true);

    const onClosed = () => {
        setIsVisible(false);
    }

    return (
        <div
            className={`${classes['project-guide']} ${(gridState && isVisible) ? classes['is-active'] : ''}`}
            onClick={ onClosed }
        >
            <div className={classes['project-guide__container']}>
                <svg className={classes['icon-swipe']}>
                    <use xlinkHref="images/svg-symbols.svg#swipe"></use>
                </svg>
                <div className={classes['project-guide__text']}>
                    Swipe projects left to right <br />
                    <small className={classes['font-weight-500']}>Click to close</small></div>
            </div>
        </div>
    )
}

export default ProjectGuide;
