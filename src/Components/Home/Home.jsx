import style from "./Home.module.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import profilePhoto from "../../Assets/Profile.png";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className={style.mainContent}>
      <div className={style.presentation}>
        <span className={style.blur}></span>
        <div className={style.namePresentation}>

            <h3>Bienvenido a mi portafolio</h3>
  
              <h2>Soy <span>Jefferson Baldión</span>, Desarrollador FullStack </h2>
 
            <p>{'<Los limites están para romperse/>'}</p>
            <p>
              Soy un apasionado por la tecnología, una persona muy competitiva
              que le gustan los retos y los desafíos, me gusta trabajar en
              equipo y aprender de todos aquellos mejores que yo.
            </p>
     
          <div className={style.btnName}>
            <button>Contactame</button>
          </div>
        </div>
        <div className={style.imagePresentation}>
          <img src={profilePhoto} alt="" />
        </div>
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
