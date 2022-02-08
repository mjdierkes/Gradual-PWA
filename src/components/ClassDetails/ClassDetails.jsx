import { useLocation } from "react-router-dom";

import ClassDetailsNavbar from "./ClassDetailsNavbar";
import ClassAssignmentsList from "./ClassAssignmentsList";
import ClassInformation from "./ClassInformation";


export default function ClassDetails() {

    const { state } = useLocation();
    const { course } = state;

    const {name, grade, info} = course;

    const majorAssignments = course["assignments"].filter(assignment => assignment["category"] === "Major Grades")
    const minorAssignments = course["assignments"].filter(assignment => assignment["category"] === "Minor Grades")

    return (
        <section class="d-flex flex-column justify-content-between" style={{height: "100%"}}>
        
        <div>
            <ClassDetailsNavbar courseName={name}/>
            <ClassAssignmentsList category={"Major"} assignments={majorAssignments} />
            <ClassAssignmentsList category={"Minor"} assignments={minorAssignments} />
            
            <p className={"text-end fw-bold px-2 " + (parseFloat(grade) >= 90 ? "text-success" : parseFloat(grade) >= 80 ? "text-warning" : "text-danger")} style={{fontSize: "1.2rem"}}>Class Average: {grade}</p>
        </div>

            <div>
                <ClassInformation course={course} info={info}/>
            </div>

        </section>
    )
}