import classes from "./Experience.module.scss";
import ExperienceItems from "../../layout/experience-items/ExperienceItems";
import { experiencesData } from "../../../assets/data";

const Experience = () => {
    return (
        <div className={classes['experiences']}>
            <div className={classes['experiences__item']}>
                <ExperienceItems  items={experiencesData} />
            </div>
            <div className={classes['experiences__item']}>
                <ExperienceItems  items={experiencesData} />
            </div>
        </div>
    )
}

export default Experience;
