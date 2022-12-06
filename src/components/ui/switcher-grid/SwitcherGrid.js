import React, {} from "react";
import classes from "./SwitcherGrid.module.scss";

const SwitcherGrid = props => {
    const { gridState, setGridState } = props;

    const onToggleGrid = event => {
        event.preventDefault();
        setGridState(!gridState);
    };

    return (
        <div className={classes['switcher-grid']}>
            <button onClick={onToggleGrid} className={`${classes['switcher-grid__button']} ${gridState ? classes['switcher-grid--active'] : ''}`}>
                <div className={classes['switcher-grid__bar']}></div>
                <div className={classes['switcher-grid__bar']}></div>
                <div className={classes['switcher-grid__bar']}></div>
                <div className={classes['switcher-grid__bar']}></div>
            </button>
        </div>
    )
}

export default SwitcherGrid;
