import smallLogo from "./assets/gradualIconSmall.png"
import "./styles/css/navbarStyles.css"

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-success">
      <div class="container-fluid">
        <a class="navbar-brand nav-link" href="#">
          <img src={smallLogo} alt="" width="30" height="30" className="d-inline-block align-text-top logo-img" />
          <strong>Gradual</strong>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Developers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>

          <a href="" class="nav-link signInLink">Sign in with HAC</a>

        </div>
      </div>
    </nav>
  )
}
