import classes from "./ProjectCover.module.scss";

function ProjectCover(props) {
    return (
        <article className={classes["project-cover"]}>
            <div className={classes["project-cover__inner"]}>
                <a className={classes["project-cover__image-wrap"]} href="#" target="_blank">
                <div className={classes["project-cover__image-container"]}>
                    <img
                        className={classes["project-cover__image img-cover js-lazy"]}
                        src="assets/img/content/projects/arion.jpg"
                        alt="Arion – Admin Dashboard &amp; UI Kit HTML5 Template"/>
                </div>
            </a>
                <div className={classes["project-cover__details"]}>
                    <div className={classes["project-cover__details-inner"]}>
                        <h3 className={classes["project-cover__title"]}><span>Arion</span><span
                            className={classes["project-cover__title-full"]}>Arion – Admin Dashboard &amp; UI Kit HTML5 Template</span>
                        </h3>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCover;
