import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Switcher from "../../ui/switcher/Switcher";

const Header = props => {
    return (
        <header className="page-header">
            <div className="page-header__container">
                <div className="page-header__row">
                    <div className="page-header__left">
                        <div className="page-header__nav">
                            <Link className="page-header__nav-link" to={props.toggleLinkPath}>
                                <span className="page-header__nav-text">{props.toggleLinkText}</span>
                            </Link>
                            <a className="page-header__nav-link page-header__nav-link--pre" href="https://github.com/evsgodev" target="_blank" rel="noreferrer">
                                <svg className="icon-github" width="14" height="14">
                                    <use xlinkHref="images/svg-symbols.svg#github"></use>
                                </svg>
                                <span className="page-header__nav-text">Github</span>
                            </a>
                            <div className="page-header__avatar">
                                <div className="page-header__avatar-img">
                                    <img src="images/avatar.jpg" width="152" alt="#"/>
                                </div>
                                <div className="page-header__tooltip">
                                    <div className="page-header__tooltip-content">
                                        <div className="page-header__tooltip-bg"></div>
                                        <div className="page-header__tooltip-text">Experience</div>
                                    </div>
                                </div>
                            </div>
                            <Switcher theme="true" />
                        </div>
                    </div>
                    <div className="page-header__center">
                        <Link className="page-header__title-link" to="/about">
                            <h2 className="page-header__title">
                                <span className="char">Evgeny</span> <span className="char">Staroverov</span>
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
