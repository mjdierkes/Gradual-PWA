import ClassAssignmentsListElement from "./ClassAssignmentsListElement"

export default function ClassAssignmentsList(props) {

    const { category, assignments, courseGrade } = props

    return (
        <div class="my-4">
            <div class="d-flex justify-content-between mx-2 fw-bold" style={{fontSize: "1.2rem"}}><p>{category}</p><p>{courseGrade}</p></div>
        <div class="list-group list-group-flush mx-2">
            {assignments.map((assignment) => (
                <ClassAssignmentsListElement key={assignment["assignment"]} assignmentName={assignment["assignment"]} assignmentScore={assignment["score"]}/>
            ))}
        </div>
        </div>
        
    )
}