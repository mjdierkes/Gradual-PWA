export default function ProfileInformation({student}) {
    
    const {grade, id, campus, birthdate, counselor} = student;

    return (
        <ul class="list-group list-group-horizontal">
        <li class="list-group-item"><span class="text-muted">Student ID</span><span>{id}</span></li>
        <li class="list-group-item"><span class="text-muted">Grade</span><span></span>{grade}</li>
        <li class="list-group-item"><span class="text-muted">Campus</span><span></span>{campus}</li>
        <li class="list-group-item"><span class="text-muted">Counselor</span><span></span>{counselor}</li>
        <li class="list-group-item"><span class="text-muted">Birthdate</span><span></span>{birthdate}</li>
    </ul>
    )
}