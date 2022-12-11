import classes from "./Experience.module.scss";
import ExperienceItems from "../../layout/experience-items/ExperienceItems";

const Experience = ({ rows }) => {
    return (
        <div className={classes['experiences']}>
            {rows.map(({ id, items }) => {
                return (
                    <div className={classes['experiences__item']} key={id}>
                        <ExperienceItems  items={items} />
                    </div>
                )
            })}
        </div>
    )
}

export default Experience;
