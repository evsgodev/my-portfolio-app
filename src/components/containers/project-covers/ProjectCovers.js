import React, { useState } from "react";
import styled from "styled-components";
import classes from "./ProjectsCovers.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import ProjectCover from "../../layout/project-cover/ProjectCover";
import { projects } from "../../../assets/data";

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

    return (
        <section className={`${classes['project-covers']} `} id="projects">
            <h1 className={classes['project-covers__title']}>
                <div className={`${classes['project-covers__title-text']} js-project-covers-title-text`}>{props.title}</div>
            </h1>
            <div className="container">
                <div className="container__center">
                    <div className={`${classes['project-covers__items']} js-project-covers-items`}>
                        {items.map(item => {
                           const {
                               id,
                               dark,
                               primary,
                               empty
                           } = item;

                           return (
                               <div
                                   className={`${classes['project-covers__item']} ${primary ? classes['project-covers__item--primary'] : ''} ${dark ? classes['project-covers__item--dark'] : ''} ${empty ? classes['project-covers__item--last'] : ''} js-project-covers-item`} key={id}>
                                   <ProjectCover project={item} />
                               </div>
                           )
                        })}
                    </div>
                </div>
            </div>
            <div className={`${classes['project-covers__row']} js-project-covers-row`}>
                <div className="container">
                    <div className="container__center">
                        <Slider
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

                                if (!isEmpty) {
                                    return (
                                        <SwiperSlide key={id}>
                                            <ProjectCover project={item}/>
                                        </SwiperSlide>
                                    )
                                }
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className={`${classes['project-covers__progress-line']} js-project-covers-progress-line`}></div>
        </section>
    )
}

export default ProjectCovers;
