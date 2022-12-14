import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.module.scss";
import classes from "./Header.module.scss";
import Switcher from "../../ui/switcher/Switcher";

const Header = props => {
    const [ themeToggle, setThemeToggle ] = useState(false)

    const onToggleTheme = event => {
        event.preventDefault();
        document.documentElement.classList.toggle('theme-alt', !themeToggle);
        setThemeToggle(!themeToggle);
    };

    return (
        <header className={`${classes['page-header']} ${props.secondary ? classes['page-header--secondary'] : ''}`}>
            <div className={classes['page-header__container']}>
                <div className={classes['page-header__row']}>
                    <div className={classes['page-header__left']}>
                        <div className={classes['page-header__nav']}>
                            <Link className={classes['page-header__nav-link']} to={props.toggleLinkPath}>
                                <span className={classes['page-header__nav-text']}>{props.toggleLinkText}</span>
                            </Link>
                            <a className={`${classes['page-header__nav-link']} ${classes['page-header__nav-link--pre']}`} href="https://github.com/evsgodev" target="_blank" rel="noreferrer">
                                <svg className={'icon-github'} width="14" height="14">
                                    <use xlinkHref="images/svg-symbols.svg#github"></use>
                                </svg>
                                <span className={classes['page-header__nav-text']}>Github</span>
                            </a>
                            <div className={classes['page-header__avatar']}>
                                <div className={classes['page-header__avatar-img']}>
                                    <img src="images/avatar.jpg" width="152" alt="#"/>
                                </div>
                                <div className={classes['page-header__tooltip']}>
                                    <div className={classes['page-header__tooltip-content']}>
                                        <div className={classes['page-header__tooltip-bg']}></div>
                                        <div className={classes['page-header__tooltip-text']}>Experience</div>
                                    </div>
                                </div>
                            </div>
                            <Switcher
                                onClick={ onToggleTheme }
                                themeToggle={ themeToggle }
                                data-switch={'theme'}
                            />
                        </div>
                    </div>
                    <div className={classes['page-header__center']}>
                        <Link className={classes['page-header__title-link']} to="/about">
                            <h2 className={classes['page-header__title']}>
                                <span className={classes.char}>Evgeny</span> <span className={classes.char}>Staroverov</span>
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
