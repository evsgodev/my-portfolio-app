import React, {useState} from "react";
import SwitcherGrid from "../ui/switcher-grid/SwitcherGrid";
import ProjectGuide from "../layout/project-guide/ProjectGuide";

function ProjectInterface() {
    const [gridState, setGridState] = useState(false);

    return (
        <div>
            <SwitcherGrid gridState={!gridState} setGridState={setGridState} />
            <ProjectGuide gridState={!gridState} setGridState={setGridState} />
        </div>
    )
}

export default ProjectInterface;
