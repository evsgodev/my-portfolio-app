import classes from "./Switcher.module.scss";
import {useState} from "react";

const Switcher = props => {
    const { themeToggle } = props;
    const [ isToggle, setIsToggle ] = useState(false);

    const modifiers = (() => {
        if (!themeToggle) {
            return classes['switcher--theme'];
        }
    })();

    const onToggle = event => {
        event.preventDefault();
        setIsToggle(!isToggle);
    };

    return (
        <button onClick={onToggle} className={`${classes.switcher} ${modifiers} ${themeToggle || isToggle ? classes['switcher--active'] : ''}`} {...props}>
            <span className={classes['switcher__handle']}></span>
        </button>
    )
}

export default Switcher;
