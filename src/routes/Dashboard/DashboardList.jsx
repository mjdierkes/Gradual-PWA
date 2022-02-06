import DashboardListElement from "./DashboardListElement";
import "../../styles/css/dashboardListStyles.css";

export default function DashboardList(props) {

    let {currentClasses} = props;

    currentClasses.forEach((course) => course.name = course.name.split("-")[1].substring(2));

    return (
        <div class="list-group list-group-flush">
            {currentClasses.map((course) => (
                <DashboardListElement key={course.name} course={course}/>
            ))}
        </div>
    )
}