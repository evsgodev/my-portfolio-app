import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import classes from "./ProjectsCovers.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectCover from "../../layout/project-cover/ProjectCover";
import { projects } from "../../../assets/data";
import {gsap, Circ, Back} from "gsap";

const Slider = styled(Swiper)`
  overflow: inherit;

  .swiper-slide {
    @media screen and (min-width: 768px) {
      width: 60%;
    }
  }
`;

const ProjectCovers = props => {
    const [ items ] = useState(projects);
    const { gridState, setGridState } = props;
    const projectCoverTitle = useRef(null);
    const projectCoverItems = useRef(null);
    const projectCoverItem = useRef([]);
    const projectCoverRow = useRef(null);
    const projectCoverProgressLine = useRef(null);
    const projectSlider = useRef(null);

    const refsProjectItems = item => projectCoverItem.current.push(item);

    useEffect(() => {
        const toggleDuration = 0.2;
        const tlToggle = gsap.timeline();
        const tlRow = gsap.timeline();

        if (gridState) {
            gsap.to(projectCoverItem.current, {
                scale: 0.0,
                duration: toggleDuration + 0.2
            });

            gsap.set(projectSlider.current, {
                x: '100%',
                autoAlpha: 0
            });

            gsap.set(projectCoverTitle.current, {
                x: '-18%',
                autoAlpha: 0
            });

            tlToggle.to(projectCoverItems.current, {
                autoAlpha: 0,
                duration: toggleDuration,
                ease: 'linear'
            }).to(projectCoverRow.current, {
                autoAlpha: 1,
                duration: toggleDuration,
                ease: 'linear',
                onStart: () => {
                    projectCoverItems.current.style.display = 'none';
                    projectCoverRow.current.style.display = 'block';
                    tlRow.to(projectSlider.current, {
                        x: '0',
                        duration: toggleDuration + 0.5,
                        ease: 'power4.out'
                    })
                        .to(projectSlider.current, {
                            autoAlpha: 1,
                            duration: toggleDuration + 0.2,
                            ease: 'power1.in'
                        }, '-=0.75')
                        .to(projectCoverTitle.current, {
                            x: '0',
                            autoAlpha: 1,
                            duration: toggleDuration + 0.6,
                            ease: Circ.easeOut
                        }, '-=0.75');
                }
            });
        } else {
            tlToggle.to(projectCoverRow.current, {
                autoAlpha: 0,
                duration: toggleDuration,
                ease: 'linear'
            }).to(projectCoverItems.current, {
                autoAlpha: 1,
                duration: toggleDuration,
                ease: 'linear',
                onStart: () => {
                    projectCoverItems.current.style.display = '';
                    projectCoverRow.current.style.display = 'none';
                    gsap.to(projectCoverItem.current, {
                        scale: 1,
                        duration: toggleDuration + 0.1,
                        ease: Back.easeOut.config(1)
                    });
                }
            });
        }
    }, [gridState, setGridState]);

    return (
        <section className={`${classes['project-covers']} `} id="projects">
            <h1 className={classes['project-covers__title']}>
                <div className={`${classes['project-covers__title-text']}`} ref={projectCoverTitle}>{props.title}</div>
            </h1>
            <div className="container">
                <div className="container__center">
                    <div className={`${classes['project-covers__items']}`} ref={projectCoverItems}>
                        {items.map(item => {
                           const {
                               id,
                               dark,
                               primary,
                               empty
                           } = item;

                           return (
                               <div
                                   className={`${classes['project-covers__item']} ${primary ? classes['project-covers__item--primary'] : ''} ${dark ? classes['project-covers__item--dark'] : ''} ${empty ? classes['project-covers__item--last'] : ''}`} key={id} ref={refsProjectItems}>
                                   <ProjectCover project={item} />
                               </div>
                           )
                        })}
                    </div>
                </div>
            </div>
            <div className={`${classes['project-covers__row']}`} ref={projectCoverRow}>
                <div className="container">
                    <div className="container__center">
                        <Slider
                            ref={projectSlider}
                            id="projectsCoverSlider"
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={'auto'}
                            freeMode={true}
                            loop={true}
                            loopedSlides={5}
                            speed={400}
                            touchStartPreventDefault={false}
                            pagination={{
                                el: classes['project-covers__progress-line'],
                                type: 'progressbar'
                            }}
                            breakpoints={{
                                768: {
                                    spaceBetween: 80,
                                    centeredSlides: false,
                                    touchRatio: 2,
                                    resistanceRatio: 0.5
                                }
                            }}
                        >
                            {items.map((item) => {
                                const {
                                    id,
                                    empty: isEmpty
                                } = item;

                                if (isEmpty) {
                                    return false;
                                }

                                return (
                                    <SwiperSlide key={id}>
                                        <ProjectCover project={item}/>
                                    </SwiperSlide>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className={`${classes['project-covers__progress-line']} ${gridState ? classes['is-visible'] : ''}`} ref={projectCoverProgressLine}></div>
        </section>
    )
}

export default ProjectCovers;
