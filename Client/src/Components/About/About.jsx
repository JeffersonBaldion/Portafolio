import style from "./About.module.css";
import footballIcon from "../../Assets/footballIcon.png";
import gamesIcon from "../../Assets/gamesIcon.png";
import tripIcon from "../../Assets/tripIcon.png";
import languagesIcon from "../../Assets/languagesIcon.png";
import cinemaIcon from "../../Assets/cinemaIcon.png";
import musicIcon from "../../Assets/musicIcon.png";

export default function About() {
  return (
    <div className={style.aboutContainer}>
      <span className={style.blur}></span>
      <div className={style.about}>
        <div className={style.titleContainer}>
          <h1 className={style.title}>Sobre mi</h1>
        </div>
        <p>
          Desarrollador altamente motivado con una sólida experiencia en el
          ámbito del desarrollo web. Mi enfoque se centra en la eficiencia y la
          creatividad, respaldado por una destacada habilidad para colaborar
          efectivamente en equipos multidisciplinarios y superar desafíos
          técnicos con soluciones innovadoras. Mi pasión por la innovación y la
          programación me ha impulsado a contribuir de manera significativa en
          proyectos diversos. Estoy entusiasmado por la oportunidad de aplicar
          mi experiencia y dedicación en un entorno de trabajo dinámico y
          orientado a resultados, donde pueda seguir creciendo y aportar al
          éxito del equipo.
        </p>
      </div>
      <div className={style.info}>
        <div className={style.skillsContainer}>
          <div className={style.skillsTitle}>
          <h3>Habilidades</h3>
          </div>

          <div className={style.skills}>
            <ul>
              <li className={style.javascript}>Javascript</li>
              <li className={style.react}>React</li>
              <li className={style.redux}>Redux</li>
              <li className={style.css}>Css</li>
              <li className={style.html}>HTML</li>
              <li className={style.tailwind}>Tailwind</li>
              <li className={style.express}>Express</li>
              <li className={style.sequelize}>Sequelize</li>
              <li className={style.postgresql}>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className={style.hobbiesContainer}>
          <div className={style.hobbiesTitle}>
            <h3>Hobbies</h3>
          </div>
          <div className={style.hobbies}>
            <div className={style.hobbiesOne}>
              <div>
                <span>Videojuegos</span>
                <img src={gamesIcon} alt="gamesIcon" />
              </div>
              <div>
                <span>Viajes</span>
                <img src={tripIcon} alt="tripIcon" />
              </div>
              <div>
                <span>Lenguas</span>
                <img src={languagesIcon} alt="languagesIcon" />
              </div>
            </div>
            <div className={style.hobbiesOne}>
              <div>
                <span>Cine</span>
                <img src={cinemaIcon} alt="cinemaIcon" />
              </div>
              <div>
                <span>Musica</span>
                <img src={musicIcon} alt="musicIcon" />
              </div>
              <div>
                <span>Futbol</span>
                <img src={footballIcon} alt="footballIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
