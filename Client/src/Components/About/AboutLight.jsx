import style from "./AboutLight.module.css";
// import profilePhoto from "../../Assets/user.png";
import profilePhoto from "../../Assets/Profile-removebg.png";
import javascriptIcon from "../../Assets/javascript.png";
import expressIcon from '../../Assets/express.png'
import reactIcon from '../../Assets/react.png'
import tailwindIcon from '../../Assets/Tailwind.png'
import postgreSQLIcon from '../../Assets/Postgresql.png'
import mongoDBIcon from '../../Assets/mongoDB.png'
import viajeIcon from "../../Assets/viajesIcon.png";
import juegoIcon from '../../Assets/juegosIcon.png'
import lenguasIcon from '../../Assets/lenguasIcon.svg'
import cineIcon from '../../Assets/cinemaIcon.svg'
import musicaIcon from '../../Assets/musicaIcon.svg'
import futbolIcon from '../../Assets/futbolIcon.svg'



export default function AboutLight() {
  return (
    <div>
      <div className={style.aboutContainer}>
        <div className={style.seccionUno}>
          <div className={style.infoAbout}>
            <h2>Sobre mi</h2>
            <h3>
              Soy un apasionado por la tecnología, una persona muy competitiva
              que le gustan los retos y los desafíos, me gusta trabajar en
              equipo y aprender de todos aquellos mejores que yo.
            </h3>
          </div>
          <div className={style.imagenAbout}>
            <img src={profilePhoto} alt="" />
          </div>
        </div>
        <div className={style.seccionDos}>
          <h2>Yo soy un</h2>
          <h3>
            Desarrollador altamente motivado con una sólida experiencia en el
            ámbito del desarrollo web. Mi enfoque se centra en la eficiencia y
            la creatividad, respaldado por una destacada habilidad para
            colaborar efectivamente en equipos multidisciplinarios y superar
            desafíos técnicos con soluciones innovadoras. Mi pasión por la
            innovación y la programación me ha impulsado a contribuir de manera
            significativa en proyectos diversos. Estoy entusiasmado por la
            oportunidad de aplicar mi experiencia y dedicación en un entorno de
            trabajo dinámico y orientado a resultados, donde pueda seguir
            creciendo y aportar al éxito del equipo.
          </h3>
        </div>
      </div>
      <div className={style.featuresContainer}>
        <div className={style.features}>
          <h2>Habilidades</h2>
          <div className={style.featuresSeccion}>
            <div>
              <div className={style.icon}>
                <img src={javascriptIcon} alt="" />
              </div>
              <label>Javascript</label>
            </div>
            <div>
              <div className={style.icon}>
                <img src={expressIcon} alt="" />
              </div>
              <label>Express JS</label>
            </div>
            <div>
              <div className={style.icon}>
                <img src={reactIcon} alt="" />
              </div>
              <label>React JS</label>
            </div>
          </div>
          <div className={style.featuresSeccion}>
            <div>
              <div className={style.icon}>
                <img src={tailwindIcon} alt="" />
              </div>
              <label>Tailwind</label>
            </div>
            <div>
              <div className={style.icon}>
                <img src={postgreSQLIcon} alt="" />
              </div>
              <label>PostgreSQL</label>
            </div>
            <div>
              <div className={style.icon}>
                <img src={mongoDBIcon} alt="" />
              </div>
              <label>MongoDB</label>
            </div>
          </div>
        </div>
        <div className={style.features}>
          <h2>Hobbies</h2>
          <div className={style.featuresSeccion}>
            <div>
              <div className={style.iconDos}>
                <img src={juegoIcon} alt="" />
              </div>
              <label>Juegos</label>
            </div>
            <div>
              <div className={style.iconDos}>
                <img src={viajeIcon} alt="" />
              </div>

              <label>Viajes</label>
            </div>
            <div>
              <div className={style.iconDos}>
                <img src={lenguasIcon} alt="" />
              </div>

              <label>Lenguas</label>
            </div>
          </div>
          <div className={style.featuresSeccion}>
            <div>
              <div className={style.iconDos}>
                <img src={cineIcon} alt="" />
              </div>

              <label>Cine</label>
            </div>
            <div>
              <div className={style.iconDos}>
                <img src={musicaIcon} alt="" />
              </div>

              <label>Musica</label>
            </div>
            <div>
              <div className={style.iconDos}>
                <img src={futbolIcon} alt="" />
              </div>

              <label>Futbol</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
