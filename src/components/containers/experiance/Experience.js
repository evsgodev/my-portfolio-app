import classes from "./Experience.module.scss";
import ExperienceItems from "../../layout/experience-items/ExperienceItems";
import { experiencesData } from "../../../assets/data";

const Experience = () => {
    return (
        <div className={classes['experiences']}>
            {experiencesData.map(({ id, items }) => {
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
