export default function ClassInformation(props) {

    const { info, course } = props;

    const {teacher, periods} = info
    const {credits, weight} = course

    return (
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><span class="text-muted">Credits</span><span>{credits}</span></li>
            <li class="list-group-item"><span class="text-muted">Weight</span><span>{weight}</span></li>
            <li class="list-group-item"><span class="text-muted">Period</span><span>{periods}</span></li>
            <li class="list-group-item"><span class="text-muted">Teacher</span><span>{teacher}</span></li>
        </ul>
    )
}