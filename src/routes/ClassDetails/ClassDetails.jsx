import { useLocation } from "react-router-dom";

import ClassDetailsNavbar from "./ClassDetailsNavbar";
import ClassAssignmentsList from "./ClassAssignmentsList";
import ClassInformation from "./ClassInformation";

export default function ClassDetails(props) {

    const { state } = useLocation();
    const { course } = state;

    const majorAssignments = course["assignments"].filter(assignment => assignment["category"] === "Major Grades")
    const minorAssignments = course["assignments"].filter(assignment => assignment["category"] === "Minor Grades")

    return (
        <section>

        <ClassDetailsNavbar courseName={course.name}/>
        <ClassAssignmentsList category={"Major"} assignments={majorAssignments} />
        <ClassAssignmentsList category={"Minor"} assignments={minorAssignments} />
        
        <p class="text-end px-2" style={{fontSize: "1.2rem"}}>Class Average: {course["grade"]}</p>

        <ClassInformation course={course} info={course.info}/>
        </section>
    )
}