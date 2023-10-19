import style from "./About.module.css";
import expressjs from '../../Assets/express.png'
import imageJavascript from '../../Assets/javascript.png'
import imageReact from '../../Assets/react.png'
import imageRedux from '../../Assets/Redux.png'
import imagePostgresql from '../../Assets/Postgresql.png'
import imageTailwind from '../../Assets/Tailwind.png'
import imageHtml from '../../Assets/Html.png'
import imageCss from '../../Assets/Css.png'


export default function About() {
  return (
    <div className={style.about} >
        <div className={style.aboutContainer}>

            <div className={style.tecnologies}>
               <h2>Mis Tecnologías</h2>
                
                <table class={style.table}>

                    <tr>
                        <td><img src={imageJavascript} alt="Javascript"></img></td>
                        <td><img src={imageReact} alt="React"></img></td>
                        <td><img src={imageRedux} alt="Redux"></img></td>
                    </tr>

                    <tr>
                        <td><img src={expressjs} alt="express-js"/></td>
                        <td><img src="https://cdn.freebiesupply.com/logos/large/2x/sequelize-logo-black-and-white.png" alt="Sequelize"></img></td>
                        <td><img src={imagePostgresql} alt="PostgreSQL"></img></td>
                    </tr>

                    <tr>
                        <td><img src={imageTailwind} alt="Tailwind"></img></td>
                        <td><img src={imageHtml} alt="HTML"></img></td>
                        <td><img src={imageCss} alt="CSS"></img></td>
                    </tr>

                </table>
            </div>
            <div className={style.texto}>
                <div>
                    <h2>Sobre mi</h2>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                        voluptatem ea architecto iste magnam delectus totam eos cupiditate
                        in ullam fugiat culpa nam, minima, distinctio praesentium,
                        voluptatum quos numquam est.
                    </p>
                </div>
                <div className={style.idiomas}>
                    <div className={style.idiomaEnglish}></div>
                    <div className={style.idiomaSpanish}></div>
            </div>
                
            </div>
        </div> 
            
            <div className={style.habilidades}>
                <div className={style.botonSkill}>Trabajo en equipo</div>
                <div className={style.botonSkill}>Competitivo</div>
                <div className={style.botonSkill}>Adaptable</div>
                <div className={style.botonSkill}>Responsable</div>
                <div className={style.botonSkill}>Puntual</div>
            </div>
           
    </div>
  );
}
