import classes from "./ProjectGuide.module.scss";

const ProjectGuide = () => {
    return (
        <div className={`${classes['project-guide']} js-project-guide`}>
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
