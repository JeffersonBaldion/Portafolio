import style from "./ProjectsLight.module.css";
import caravanaPhoto from "../../Assets/CaravanaShot.png";
import apiDogPhoto from "../../Assets/ApiDogShot.png";
import readlyGoodsPhoto from "../../Assets/readlygoodsShot.png";
import templateUnoPicture from "../../Assets/templateUno.png";
import templateDosPicture from "../../Assets/templateDos.png";
import templateTresPicture from "../../Assets/templateTres.png";

export default function ProjectsLight() {
  return (
    <div>
      {/* Seccion de proyectos */}
      <div className={style.projectsContainer} id="projects">
        <h2>Proyectos</h2>
        <div className={style.eachProjectContainer}>
          <div className={style.eachProject}>
            <div className={style.imageProject}>
              <img src={caravanaPhoto} alt="" />
            </div>
            <div className={style.infoProject}>
              <h2>Caravana</h2>
              <h3>
                Como Desarrollador Back-end, estructuré el servidor y base de
                datos para una bolsa de empleo dirigida a personas con
                discapacidad. Configuré un sistema CRUD para el inicio de
                sesión, gestión de usuarios y publicación de ofertas. Además,
                habilité un editor de texto para blogs administrativos,
                demostrando mi enfoque eficiente y funcional.
              </h3>
              <div className={style.projectButton}>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <div className={style.hrefButton}>
                  <a href="https://caravana.onrender.com" target="_blank">
                    {"Ver más"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.eachProject}>
            <div className={style.imageProject}>
              <img src={apiDogPhoto} alt="" />
            </div>
            <div className={style.infoProject}>
              <h2>ApiDog</h2>
              <h3>
                Desarrollé de manera individual un proyecto Full-Stack para
                gestionar una API Rest, creando un catálogo de perros con
                funciones de filtrado, búsqueda y un formulario de creación.
                Implementé un sistema CRUD completo para el sitio web,
                destacando mi capacidad para abordar el desarrollo desde la
                interfaz hasta el manejo de datos eficiente.
              </h3>
              <div className={style.projectButton}>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                
                
                <div className={style.hrefButton}>
                <a
                  href="https://github.com/JeffersonBaldion/Api-Dog"
                  target="_blank"
                >
                  {"Ver más"}
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.eachProject}>
            <div className={style.imageProject}>
              <img src={readlyGoodsPhoto} alt="" />
            </div>
            <div className={style.infoProject}>
              <h2>Readly Goods</h2>
              <h3>
                Como Desarrollador Front-end, creé un catálogo de libros
                digitales con filtros de búsqueda, diseñé las tarjetas
                individuales para cada libro y colaboré en el desarrollo del
                header y footer en estrecha coordinación con el equipo. Mi
                enfoque se centró en la experiencia del usuario, garantizando
                una navegación intuitiva y atractiva en este proyecto de
                e-commerce especializado en libros digitales.
              </h3>
              <div className={style.projectButton}>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <div className={style.hrefButton}>
                <a
                  href="https://c15-58-readlygoods.vercel.app/"
                  target="_blank"
                >
                  {"Ver más"}
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seccion de templates */}
      <div className={style.projectsContainer}>
        <h2>Templates</h2>
        <div className={style.eachProjectContainer}>
          <div className={style.eachProject}>
            <div className={style.imageProject}>
              <img src={templateUnoPicture} alt="" />
            </div>
            <div className={style.infoProject}>
              <h2>Template 1</h2>
              <h3>
                Template creado para una empresa tecnologica proveedora de
                software para startups.
              </h3>
              <div className={style.projectButton}>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <div className={style.hrefButton}>
                <a href="#" target="_self">
                  {"Próximamente"}
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.eachProject}>
            <div className={style.imageProject}>
              <img src={templateDosPicture} alt="" />
            </div>
            <div className={style.infoProject}>
              <h2>Template 2</h2>
              <h3>
                Template creado para un Pub y distribuidor de licores con
                servicio tanto en tienda como en linea.
              </h3>
              <div className={style.projectButton}>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <div className={style.hrefButton}>
                <a href="#" target="_self">
                  {"Próximamente"}
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.eachProject}>
            <div className={style.imageProject}>
              <img src={templateTresPicture} alt="" />
            </div>
            <div className={style.infoProject}>
              <h2>Template 3</h2>
              <h3>
                Template creado para una empresa de metalmecanica con venta en
                linea de productos para almacenaje industrial.
              </h3>
              <div className={style.projectButton}>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <div className={style.hrefButton}>
                <a href="#" target="_self">
                  {"Próximamente"}
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
