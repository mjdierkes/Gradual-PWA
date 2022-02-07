import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ProfileScreenNavbar from "./ProfileScreenNavbar";
import ProfileCard from "./ProfileCard";
import ProfileInformation from "./ProfileInformation";

export default function ProfileScreen() {

    const navigate = useNavigate();

    const {state} = useLocation();
    const {student} = state;
    const {name} = student;

    const navigateToLogin = () => {
        localStorage.clear();
        navigate("/login")
    }

    return (
        <section>
            <ProfileScreenNavbar />
            <ProfileCard name={name} />
            <ProfileInformation student={student}/>

            <p class="w-100 text-danger" onClick={navigateToLogin}>Sign Out</p>
        </section>
    )
}