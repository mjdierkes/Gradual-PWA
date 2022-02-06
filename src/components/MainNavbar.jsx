import { Link } from 'react-router-dom'; 

import smallLogo from "../assets/gradualIconSmall.png"
import "../styles/css/navbarStyles.css";

export default function MainNavbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container-fluid">
        <a class="navbar-brand nav-link" href="/">
          <img src={smallLogo} alt="gradual navbar logo" width="30" height="30" className="d-inline-block align-text-top logo-img" />
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
              <a class="nav-link" href="/">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Developers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">About</a>
            </li>
          </ul>

          <Link class="nav-link signInLink" to="/login">Sign in with HAC</Link>
        </div>
      </div>
    </nav>
  )
}