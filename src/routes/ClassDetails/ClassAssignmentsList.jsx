export default function ClassAssignmentsList(props) {

    const { category, assignments, courseGrade } = props

    return (
        <div class="my-4">
            <div class="d-flex justify-content-between mx-2 fw-bold" style={{fontSize: "1.2rem"}}><p>{category}</p><p>{courseGrade}</p></div>
        <div class="list-group list-group-flush mx-2">
            {assignments.map((assignment) => 
            (
                <div class="list-group-item list-group-item-action px-0 w-100">
                    <p class="col-8 text-start m-0">{assignment["assignment"]}</p>
                    <p className={"col-4 text-end m-0 " + (parseFloat(assignment["score"]) >= 90 ? "text-success" : parseFloat(assignment["score"]) >= 80 ? "text-warning" : "text-danger")} >{assignment["score"]}</p>
                </div>
            ))}
        </div>
        </div>
        
    )
}