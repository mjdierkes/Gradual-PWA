import {studentData, currentGPAS, schedule, currentClasses} from "./fakeData.js";
import { useLocation } from "react-router-dom";

import DashboardNavbar from "./DashboardNavbar.jsx";
import DashboardList from "./DashboardList.jsx";

export default function Dashboard() {

    const { state } = useLocation();
    const {student} = state;
    const {info, classes, schedule} = student

    return (
        <main>
            <DashboardNavbar info={info}/>
            <DashboardList currentClasses={classes} schedule={schedule}/>
        </main>
    )
}