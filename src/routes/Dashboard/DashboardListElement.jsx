export default function DashboardListElement(props) {

    const {name, grade} = props

    if(parseFloat(grade) >= 90) {
        return (
            <div class="list-group-item list-group-item-action">
                <a href="/">{name}</a>
                <span class="badge bg-success rounded-rectangle">{grade}</span>
            </div>
        )
    } else if(parseFloat(grade) >= 80) {
        return (
        <div class="list-group-item list-group-item-action">
            <a href="/">{name}</a>
            <span class="badge bg-warning rounded-rectangle">{grade}</span>
        </div>
        )
    } else {
        return (
        <div class="list-group-item list-group-item-action">
            <a href="/">{name}</a>
            <span class="badge bg-danger rounded-rectangle">{grade}</span>
        </div>
        )
    }
}
