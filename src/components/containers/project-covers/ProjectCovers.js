import { useState } from "react";
import classes from "./ProjectsCovers.module.scss";
import ProjectCover from "../../layout/project-cover/ProjectCover";
import { projects } from "../../../assets/data";

function ProjectCovers(props) {
    const [ items ] = useState(projects);

    return (
        <section className={classes['project-covers']} id="projects">
            <h1 className={classes['project-covers__title']}>
                <div className={classes['project-covers__title-text']}>{props.title}</div>
            </h1>
            <div className="container">
                <div className="container__center">
                    <div className={classes['project-covers__items']}>
                        {items.map(item => {
                           const {
                               id,
                               dark,
                               primary,
                               empty
                           } = item;

                           return (
                               <div
                                   className={`${classes['project-covers__item']} ${primary ? classes['project-covers__item--primary'] : ''} ${dark ? classes['project-covers__item--dark'] : ''} ${empty ? classes['project-covers__item--last'] : ''}`} key={id}>
                                   <ProjectCover project={item} />
                               </div>
                           )
                        })}
                    </div>
                </div>
            </div>
            <div className={classes['project-covers__row']}>
                <div className="container">
                    <div className="container__center">
                        <div className={`${classes['project-covers__row-slider']} swiper-container`} id="projectsCoverSlider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
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
