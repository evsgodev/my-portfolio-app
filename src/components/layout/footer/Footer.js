import {useEffect, useRef} from "react";
import classes from "./Footer.module.scss";
import {gsap} from "gsap";

const Footer = props => {
    const { gridState } = props;
    const year = new Date().getFullYear();
    const footerElement = useRef(null);

    useEffect(() => {
        if (gridState) {
            gsap.set(footerElement.current, { autoAlpha: 0 });
            gsap.to(footerElement.current, { autoAlpha: 1 });
        }
    }, [gridState]);

    return (
        <footer className={classes['footer']}>
            <div className={`container`}>
                <div className={`container__center`}>
                    <div className={classes['footer__copyright']}>© {year} by portfolio website</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
