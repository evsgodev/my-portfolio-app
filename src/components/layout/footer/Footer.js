import classes from "./Footer.module.scss";

const Footer = props => {
    const year = new Date().getFullYear();

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
