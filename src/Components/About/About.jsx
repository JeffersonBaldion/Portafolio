import style from "./About.module.css";
import footballIcon from "../../Assets/footballIcon.png";
import gamesIcon from "../../Assets/gamesIcon.png";
import tripIcon from '../../Assets/tripIcon.png'
import languagesIcon from '../../Assets/languagesIcon.png'
import cinemaIcon from '../../Assets/cinemaIcon.png'
import musicIcon from '../../Assets/musicIcon.png'

export default function About() {
  return (
    <div className={style.aboutContainer}>
      <span className={style.blur}></span>
      <div className={style.about}>
        <div className={style.titleContainer}>
          <h1 className={style.title}>About me</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={style.info}>
        <div className={style.skills}>
          <h2>Skills</h2>
          <div>
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
                <span>Games</span>
                <img src={gamesIcon} alt="gamesIcon" />
              </div>
              <div>
                <span>Travel</span>
                <img src={tripIcon} alt="tripIcon" />
              </div>
              <div>
                <span>Languages</span>
                <img src={languagesIcon} alt="languagesIcon" />
              </div>
            </div>
            <div className={style.hobbiesOne}>
              <div>
                <span>Cinema</span>
                <img src={cinemaIcon} alt="cinemaIcon" />
              </div>
              <div>
                <span>Music</span>
                <img src={musicIcon} alt="musicIcon" />
              </div>
              <div>
                <span>Football</span>
                <img src={footballIcon} alt="footballIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
