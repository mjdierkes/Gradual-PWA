import { useNavigate } from "react-router-dom";

function DashboardListBadge(props) {
    
    const { grade } = props;
    
    return (
        <span className={"badge rounded-rectangle " + (grade >= 90 ? "bg-success" : grade >= 80 ? "bg-warning" : 'bg-danger')}>{grade}</span>
    )
}

export default function DashboardListElement(props) {    
    const {course, courseInfo} = props
    const { name, grade } = course
 
    let navigate = useNavigate();

    const navigateToDetails = () => {
        return navigate("/classdetails", {
            state: {course: {...course, info: {...courseInfo}}}
        });
    }

    return (
        <div class="list-group-item list-group-item-action" onClick={navigateToDetails}>{name} <DashboardListBadge grade={parseFloat(grade)}/></div>
    )
}
