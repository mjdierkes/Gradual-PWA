import smallLogo from "./assets/gradualIconSmall.png"
import "./styles/css/footerStyles.css"


export default function Footer() {
    return (
        <div class="container">
  <footer class="d-flex flex-wrap align-items-center justify-content-between py-3 my-4 border-top">
    <div class="d-flex align-items-center">
        <img src={smallLogo} alt="Gradual footer logo"/>
        <p>Gradual</p>
    </div>

    <p class="text-center">Made with <span style={{color: "#e25555"}}>&#9829;</span> for students by students</p>
  </footer>
</div>
    )
}