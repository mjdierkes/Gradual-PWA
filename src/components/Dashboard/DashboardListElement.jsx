import { useNavigate } from "react-router-dom";

function DashboardListBadge({ grade }) {    
    return (
        <span className={"badge rounded-rectangle " + (grade >= 90 ? "bg-success" : grade >= 80 ? "bg-warning" : 'bg-danger')}>{grade}</span>
    )
}

export default function DashboardListElement({course, courseInfo}) {    
    let navigate = useNavigate();

    const { name, grade } = course
 
    const navigateToDetails = () => {
        return navigate("/classdetails", {
            state: {course: {...course, info: {...courseInfo}}}
        });
    }

    return (
        <div class="list-group-item list-group-item-action" onClick={navigateToDetails}>{name} <DashboardListBadge grade={parseFloat(grade)}/></div>
    )
}
