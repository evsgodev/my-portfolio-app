import React, {useRef, useState, useCallback, useEffect} from "react";
import classes from "./ExperienceItems.module.scss";

const ExperienceItems = props => {
    const [ items ] = useState(props);
    const [ width, setWidth ] = useState(window.innerWidth);

    const expElement = useRef(null);

    const getSpeed = width => {
        const duration = ((width * 2) / 0.25);

        return expElement.current.style.setProperty('animation-duration', `${duration}ms`);
    }

    const onUpdateSpeed = useCallback(() => {
        return setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        getSpeed(width);

        window.addEventListener('resize', onUpdateSpeed);

        return () => {
            window.removeEventListener('resize', onUpdateSpeed);
        }
    }, [width, onUpdateSpeed]);

    return (
        <div className={classes['experience']} ref={expElement}>
            {items.items.map(item => {
                const { icon } = item;

                return (
                    <div className={classes['experience__item']} key={icon}>
                        <div className={classes['experience__icon']}>
                            <svg className={`icon-${icon}`}>
                                <use xlinkHref={`images/svg-symbols.svg#${icon}`}></use>
                            </svg>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ExperienceItems;
