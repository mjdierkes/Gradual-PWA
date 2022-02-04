import "../../styles/css/dashboardListStyles.css";

export default function DashboardList(props) {

    let {currentClasses} = props;

    currentClasses.forEach((course) => course.name = course.name.split("-")[1].substring(2));

    return (
        <div class="list-group list-group-flush">
            {currentClasses.map((course) => (
                <a href="/" key={course.name} class="list-group-item list-group-item-action">{course.name}</a>
            ))}
        </div>
    )
}