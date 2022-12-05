import React, {} from "react";
import classes from "./SwitcherGrid.module.scss";
import { gsap, Back, Circ } from "gsap";
import styled from "styled-components";

const SWITCHER_ACTIVE_CLS = classes['switcher-grid--active'];

const SwitcherGrid = props => {
    const onToggleGrid = event => {
        const element = event.currentTarget;
        const toggleDuration = props.duration || 0.2;
        const switcherGuide = document.querySelector('.js-project-guide');
        const grid = document.querySelector('.js-project-covers-items');
        const row = document.querySelector('.js-project-covers-row');
        const gridItems = grid.querySelectorAll('.js-project-covers-item');
        const sliderRow = row.querySelector('#projectsCoverSlider');
        const projectsTitle = document.querySelector('.js-project-covers-title-text');
        const sliderProgress = document.querySelector('.js-project-covers-progress-line');
        const footer = document.querySelector('.footer');
        const tlToggle = gsap.timeline();
        const tlRow = gsap.timeline();

        event.preventDefault();
        element.classList.toggle(SWITCHER_ACTIVE_CLS);

        if (!switcherGuide.classList.contains('is-complete')) {
            switcherGuide.classList.add('is-active');
        }

        if (element.classList.contains(SWITCHER_ACTIVE_CLS)) {
            gsap.to(gridItems, {
                scale: 0.0,
                duration: toggleDuration + 0.2
            });

            gsap.set(sliderRow, {
                x: '100%',
                autoAlpha: 0
            });

            gsap.set(footer, {
                autoAlpha: 0
            });

            gsap.set(projectsTitle, {
                x: '-18%',
                autoAlpha: 0
            });

            tlToggle.to(grid, {
                autoAlpha: 0,
                duration: toggleDuration,
                ease: 'linear'
            }).to(row, {
                autoAlpha: 1,
                duration: toggleDuration,
                ease: 'linear',
                onStart: () => {
                    grid.style.display = 'none';
                    row.style.display = 'block';
                    tlRow.to(sliderRow, {
                        x: '0',
                        duration: toggleDuration + 0.5,
                        ease: 'power4.out'
                    })
                        .to(sliderRow, {
                            autoAlpha: 1,
                            duration: toggleDuration + 0.2,
                            ease: 'power1.in'
                        }, '-=0.75')
                        .to(projectsTitle, {
                            x: '0',
                            autoAlpha: 1,
                            duration: toggleDuration + 0.6,
                            ease: Circ.easeOut
                        }, '-=0.75');
                    gsap.to(footer, { autoAlpha: 1 });
                    sliderProgress.classList.add('is-visible');
                }
            });
        } else {
            sliderProgress.classList.remove('is-visible');

            tlToggle.to(row, {
                autoAlpha: 0,
                duration: toggleDuration,
                ease: 'linear'
            }).to(grid, {
                autoAlpha: 1,
                duration: toggleDuration,
                ease: 'linear',
                onStart: () => {
                    grid.style.display = '';
                    row.style.display = 'none';
                    gsap.to(gridItems, {
                        scale: 1,
                        duration: toggleDuration + 0.1,
                        ease: Back.easeOut.config(1)
                    });
                }
            });
        }
    }

    return (
        <div className={classes['switcher-grid']}>
            <button onClick={onToggleGrid} className={`${classes['switcher-grid__button']} js-switcher-grid`}>
                <div className={classes['switcher-grid__bar']}></div>
                <div className={classes['switcher-grid__bar']}></div>
                <div className={classes['switcher-grid__bar']}></div>
                <div className={classes['switcher-grid__bar']}></div>
            </button>
        </div>
    )
}

export default SwitcherGrid;
