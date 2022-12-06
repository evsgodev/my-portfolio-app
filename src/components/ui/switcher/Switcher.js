import {useState} from "react";
import classes from "./Switcher.module.scss";

const Switcher = props => {
    const [isToggle, setToggle] = useState(false)

    const modifiers = (() => {
        if (props.theme) {
            return classes['switcher--theme'];
        }
    })();

    const onToggle = event => {
        event.preventDefault();
        document.documentElement.classList.toggle('theme-alt', !isToggle);
        setToggle(!isToggle);
    };

    return (
        <button onClick={onToggle} className={`${classes.switcher} ${modifiers} ${isToggle ? classes['switcher--active'] : ''}`} data-switch="theme">
            <span className={classes['switcher__handle']}></span>
        </button>
    )
}

export default Switcher;
