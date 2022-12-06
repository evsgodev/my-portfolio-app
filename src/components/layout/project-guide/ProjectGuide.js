import classes from "./ProjectGuide.module.scss";

const ProjectGuide = props => {
    const { gridState, setGridState } = props;

    return (
        <div
            className={`${classes['project-guide']} ${gridState ? classes['is-active'] : ''}`}
            onClick={ () => setGridState(false) }
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
