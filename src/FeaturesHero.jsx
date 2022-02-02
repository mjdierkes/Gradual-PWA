import smallLogo from "./assets/gradualIconSmall.png";
import "./styles/css/featuresHeroStyles.css";

export default function FeaturesHero() {
    return (
        <div class="container px-4 py-5" id="featured-3">
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 d-flex">
    <div class="feature col m-auto">
        <div class="feature-icon bg-gradient">
            <img src={smallLogo} alt="" />
        </div>
        <h2>Live Grades</h2>
        <p>View your grades as soon as your teacher updates them!</p>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-gradient">
            <img src={smallLogo} alt="" />
        </div>
        <h2>Real-time GPA</h2>
        <p>Rather than waiting for your GPA to update in HAC, Gradual allows you to view your GPA with your current grades factored in!</p>
        
      </div>
      <div class="feature col">
        <div class="feature-icon bg-gradient">
            <img src={smallLogo} alt="" />
        </div>
        <h2>Predicted class grades</h2>
        <p>Gradual's 'What-if' calculator allows you to predict your average in a class by manipulating assignment grades.</p>

      </div>
    </div>
  </div>
    )
}