import classes from "./Switcher.module.scss";
const SWITCHER_ACTIVE_CLS = classes['switcher--active'];
const SWITCHER_THEME_CLS = 'theme-alt';

const Switcher = props => {
    const modifiers = (() => {
        if (props.theme) {
            return classes['switcher--theme'];
        }
    })();

    const onToggle = event => {
        const button = event.target.closest(`.${classes['switcher--theme']}`);

        if (!button) {
            return;
        }

        event.preventDefault();
        button.classList.toggle(SWITCHER_ACTIVE_CLS);
        document.documentElement.classList.toggle(SWITCHER_THEME_CLS);
    }

    return (
        <button onClick={onToggle} className={`${classes.switcher} ${modifiers}`} data-switch="theme">
            <span className={classes['switcher__handle']}></span>
        </button>
    )
}

export default Switcher;
