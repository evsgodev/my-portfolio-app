import classes from "./Switcher.module.scss";

const Switcher = props => {
    const { themeToggle } = props;

    const modifiers = (() => {
        if (!themeToggle) {
            return classes['switcher--theme'];
        }
    })();

    return (
        <button className={`${classes.switcher} ${modifiers} ${themeToggle ? classes['switcher--active'] : ''}`} {...props}>
            <span className={classes['switcher__handle']}></span>
        </button>
    )
}

export default Switcher;
