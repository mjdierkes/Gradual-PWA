export default function ClassAssignmentsListElement(props) {

    const {assignmentName, assignmentScore} = props

    return (
        <div class="list-group-item list-group-item-action px-0 w-100">
        <p class="col-8 text-start m-0">{assignmentName}</p>
        <p className={"col-4 text-end m-0 " + (parseFloat(assignmentScore) >= 90 ? "text-success" : parseFloat(assignmentScore) >= 80 ? "text-warning" : "text-danger")} >{assignmentScore}</p>
    </div>
    )
}