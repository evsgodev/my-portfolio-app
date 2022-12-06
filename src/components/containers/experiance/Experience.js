import classes from "./Experience.module.scss";
import ExperienceItems from "../../layout/experience-items/ExperienceItems";
import { experiences } from "../../../assets/data";

const Experience = props => {
    const item = (() => {
        return (
            <div className={classes['experiences__item']}>
                <ExperienceItems  items={experiences} />
            </div>
        )
    })();

    return (
        <div className={classes['experiences']}>
            {item}
            {item}
        </div>
    )
}

export default Experience;
