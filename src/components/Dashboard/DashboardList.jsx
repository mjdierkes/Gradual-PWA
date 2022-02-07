import DashboardListElement from "./DashboardListElement";
import "../../styles/css/dashboardListStyles.css";

export default function DashboardList({currentClasses, schedule}) {
    
    currentClasses.forEach((course) => course.name = course.name.split("-")[1].substring(2).trim());
    
    return (
        <div class="list-group list-group-flush">
            {currentClasses.map((course) => (
                <DashboardListElement key={course.name} course={course} courseInfo={schedule.find((elm) => elm.courseName === course.name)}/>
            ))}
        </div>
    )
}