import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about} >
        <div className={style.aboutContainer}>

            <div className={style.imagen}>
                <h1>Imagen</h1>
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
                <div className={style.textoButton}>
                    <button className={style.boton}>Github</button>
                    <button className={style.boton}>LinkedIn</button>
                </div>
                
            </div>
        </div> 
            <div className={style.idiomas}>
                    <div className={style.idiomaEnglish}></div>
                    <div className={style.idiomaSpanish}></div>
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
