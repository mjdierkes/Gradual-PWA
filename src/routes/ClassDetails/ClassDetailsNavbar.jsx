import { useNavigate } from "react-router-dom";

export default function ClassDetailsNavbar(props) {

    const {courseName} = props;

    const navigate = useNavigate();

    return (
        <nav class="navbar navbar-light sticky-top bg-light my-0">
        <div class="container row">
            <p class="link-primary m-0 px-0 col-2" onClick={() => navigate(-1)}>Back</p>
            <p class="m-0 px-0 col-10">{courseName}</p>
        </div>
      </nav> 
    )
}