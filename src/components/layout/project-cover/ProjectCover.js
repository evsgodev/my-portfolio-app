import classes from "./ProjectCover.module.scss";
import Tilt from 'react-parallax-tilt';
import styled from "styled-components";

const TiltImage = styled(Tilt)`
  .glare-wrapper {
    border-radius: var(--border-radius)!important;
  }
`;

const ProjectCover = props => {
    const { dark: isDark, empty: isEmpty } = props.project;

    return (
        <article className={`${classes["project-cover"]} ${isDark ? classes['project-cover--dark'] : ''} ${isEmpty ? classes['project-cover--empty'] : ''}`}>
            <div className={classes["project-cover__inner"]}>
                <a className={classes["project-cover__image-wrap"]} href={props.project.url} target="_blank" rel="noreferrer">
                    <TiltImage
                        scale={1.04}
                        perspective={3000}
                        tiltAxis={'y'}
                        glareEnable={true}
                        glareMaxOpacity={0.9}
                        glareColor="lightblue"
                        glarePosition="all"
                    >
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
                    </TiltImage>
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
