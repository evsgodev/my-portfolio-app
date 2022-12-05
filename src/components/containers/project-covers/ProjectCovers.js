import classes from "./ProjectsCovers.module.scss";
import ProjectCover from "../../layout/project-cover/ProjectCover";

function ProjectCovers(props) {
    return (
        <section className={classes['project-covers']} id="projects">
            <h1 className={classes['project-covers__title']}>
                <div className={classes['project-covers__title-text']}>props.mainTitle</div>
            </h1>
            <div className="container">
                <div className="container__center">
                    <div className={classes['project-covers__items']}>
                        <div className={classes['project-covers__item project-covers__item--primary project-covers__item--dark']}>
                            <ProjectCover />
                        </div>
                        <div className={classes['project-covers__item project-covers__item--last']}>
                            <ProjectCover empty="true"/>
                            <article className="project-cover project-cover--empty">
                                <div className="project-cover__inner">
                                    <a className="project-cover__image-wrap" target="_blank">
                                        <div className="project-cover__image-container"></div>
                                    </a>
                                    <div className="project-cover__details">
                                        <div className="project-cover__details-inner">
                                            <h3 className="project-cover__title">Project</h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['project-covers__row']}>
                <div className="container">
                    <div className="container__center">
                        <div className={classes['project-covers__row-slider swiper-container']} id="projectsCoverSlider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <ProjectCover />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['project-covers__progress-line']}></div>
        </section>
    )
}

export default ProjectCovers;
