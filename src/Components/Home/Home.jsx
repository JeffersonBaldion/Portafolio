import style from "./Home.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import profilePhoto from "../../Assets/Profile.png"
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className={style.mainContent}>
      <div className={style.presentation}>
        <div className={style.namePresentation}>
          <h2>Jefferson</h2>
          <h2>Baldion</h2>
          <h3>Desarrollador Full-Stack</h3>
        </div>
        <div className={style.imagePresentation}>
          <img src={profilePhoto} alt="" />
        </div>
      </div>
      <div className={style.divisionOne}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className={style.lineOne}
        >
          <path
            d="M0.00,49.98 C118.79,271.88 329.28,-66.59 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          ></path>
        </svg>
      </div>
      <div className={style.aboutMe}>
        <div id="aboutMe">
          <About />
        </div>
      </div>
      <div className={style.project}>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}
