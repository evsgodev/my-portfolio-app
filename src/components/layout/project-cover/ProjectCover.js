import classes from "./ProjectCover.module.scss";

const ProjectCover = props => {
    const { dark: isDark, empty: isEmpty } = props.project;

    return (
        <article className={`${classes["project-cover"]} ${isDark ? classes['project-cover--dark'] : ''} ${isEmpty ? classes['project-cover--empty'] : ''}`}>
            <div className={classes["project-cover__inner"]}>
                <a className={classes["project-cover__image-wrap"]} href={props.project.url} target="_blank" rel="noreferrer">
                    <div className={classes["project-cover__image-container"]}>
                        {
                            isEmpty
                                ? undefined
                                : <img
                                    className={`${classes["project-cover__image"]} img-cover js-lazy`}
                                    src={props.project.image}
                                    alt={props.project.title} />
                        }
                    </div>
                </a>
                <div className={classes["project-cover__details"]}>
                    <div className={classes["project-cover__details-inner"]}>
                        <h3 className={classes["project-cover__title"]}>
                            <span>{isEmpty ? 'Project' : props.project.title}</span>
                            <span className={classes["project-cover__title-full"]}>{props.project.description}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCover;
