import iphoneMockup1 from "../../assets/iphoneMockup1.png";
import pixelMockup1 from "../../assets/pixelMockup1.png";
import iosAppStoreBadge from "../../assets/iosAppStoreBadge.png";
import androidDownloadBadge from "../../assets/androidDownloadBadge.png";
import "../../styles/css/introHeroStyles.css";

export default function IntroHero() {
    return (
        <div class="container py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6 d-flex justify-content-center mockupImageContainer" style={{ margin: "auto" }}>
        <img src={iphoneMockup1} class="d-block mx-lg-auto img-fluid iphoneMockupImage" alt="Bootstrap Themes" loading="lazy"/>
        <img src={pixelMockup1} class="d-block mx-lg-auto img-fluid androidMockupImage" alt="Bootstrap Themes" loading="lazy"/>
      </div>
      <div class="col-lg-6 m-auto">
        <p class="display-5 fw-bold mb-3">The power of HAC at your homescreen!</p>
        <p class="lead">Gradual allows you to access grades, schedules, GPAs and so much more with the tap of a button!</p>
        <p class="fst-italic">Gradual stores absolutely no user information and is open source for developers to contribute.</p>
        <div class="d-flex appStoreBadgeContainer">
          <a href="/"><img src={iosAppStoreBadge} alt="ios app store badge" class="appStoreBadge"/></a>
          <a href="/"><img src={androidDownloadBadge} alt="android download badge" class="appStoreBadge"/></a>
        </div>
      </div>
    </div>
  </div>
    )
}