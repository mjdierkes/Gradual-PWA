import gradualIconSmall from "../../assets/gradualIconSmall.png";
import "../../styles/css/loginNavbarStyles.css";

export default function LoginNavbar() {
    return (
        <nav class="d-flex flex-column">
            <div class="d-flex align-items-center">
                <img src={gradualIconSmall} alt="gradualIconSmall" /> 
                <p>Gradual</p>
            </div>
                
            <h1 style={{fontSize: "2.5rem"}}>Connect to your <br /> grades</h1>
        </nav>
    )
}