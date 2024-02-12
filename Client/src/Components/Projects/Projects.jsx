import style from "./Projects.module.css";
import React from "react";
import caravanaShot from "../../Assets/CaravanaShot.png";
import apiDogShot from "../../Assets/ApiDogShot.png";
import readlygoodsShot from "../../Assets/readlygoodsShot.png";
import expressImage from "../../Assets/express.png";
import imageJavascript from "../../Assets/javascript.png";
import reactImage from "../../Assets/react.png";
import imageRedux from "../../Assets/Redux.png";
import imagePostgresql from "../../Assets/Postgresql.png";
import tailwindImage from "../../Assets/Tailwind.png";
import imageHtml from "../../Assets/Html.png";
import cssImage from "../../Assets/Css.png";
import mongoDbImage from "../../Assets/mongoDb.png";
import templateUnoPicture from "../../Assets/templateUno.png";
import templateDosPicture from "../../Assets/templateDos.png";
import templateTresPicture from "../../Assets/templateTres.png";

const projects = [
  {
    name: "caravana",
    image: caravanaShot,
    url: "https://caravana.onrender.com",
    gitUrl: "",
    front: reactImage,
    back: expressImage,
    style: tailwindImage,
    database: imagePostgresql,
  },
  {
    name: "apidogs",
    image: apiDogShot,
    url: "",
    gitUrl: "https://github.com/JeffersonBaldion/Api-Dog",
    front: reactImage,
    back: expressImage,
    style: cssImage,
    database: imagePostgresql,
  },
  {
    name: "readlygoods",
    image: readlygoodsShot,
    url: "https://c15-58-readlygoods.vercel.app/",
    gitUrl: "",
    front: reactImage,
    back: expressImage,
    style: tailwindImage,
    database: mongoDbImage,
  },
];

export default function Projects() {
  return (
    <div className={style.projectContainer}>
      {/* Seccion de proyectos */}
      <div className={style.titleContainer}>
        <h2 className={style.title}>Proyectos</h2>
      </div>
      <div className={style.project}>
        <div className={style.eachProject}>
          <div className={style.projectStyle}>
            <img
              className={style.imageProject}
              src={caravanaShot}
              alt="caravanaShot"
            />
            <div className={style.projectStyleBack}>
              <div className={style.projectStyleDetail}>
                <h3>Caravana</h3>
                <p>
                  Como Desarrollador Back-end, estructuré el servidor y base de
                  datos para una bolsa de empleo dirigida a personas con
                  discapacidad. Configuré un sistema CRUD para el inicio de
                  sesión, gestión de usuarios y publicación de ofertas. Además,
                  habilité un editor de texto para blogs administrativos,
                  demostrando mi enfoque eficiente y funcional.
                </p>
                <div className={style.projectButton}>
                  <div>
                    <img src={reactImage} alt="" />
                    <img src={expressImage} alt="" />
                    <img src={tailwindImage} alt="" />
                    <img src={imagePostgresql} alt="" />
                  </div>
                  <div className={style.hrefButton}>
                  <a href="https://caravana.onrender.com" target="_blank">
                    {"Ver más"}
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.projectStyle}>
            <img
              className={style.imageProject}
              src={apiDogShot}
              alt="apiDogShot"
            />
            <div className={style.projectStyleBack}>
              <div className={style.projectStyleDetail}>
                <h3>ApiDog</h3>
                <p>
                  Desarrollé de manera individual un proyecto Full-Stack para
                  gestionar una API Rest, creando un catálogo de perros con
                  funciones de filtrado, búsqueda y un formulario de creación.
                  Implementé un sistema CRUD completo para el sitio web,
                  destacando mi capacidad para abordar el desarrollo desde la
                  interfaz hasta el manejo de datos eficiente.
                </p>
                <div className={style.projectButton}>
                  <div>
                    <img src={reactImage} alt="" />
                    <img src={expressImage} alt="" />
                    <img src={cssImage} alt="" />
                    <img src={imagePostgresql} alt="" />
                  </div>
                  <div className={style.hrefButton}>
                  <a href="https://github.com/JeffersonBaldion/Api-Dog" target="_blank">
                    {"Ver más"}
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.projectStyle}>
            <img
              className={style.imageProject}
              src={readlygoodsShot}
              alt="readlyGoods"
            />
            <div className={style.projectStyleBack}>
              <div className={style.projectStyleDetail}>
                <h3>Readly Goods</h3>
                <p>
                  Como Desarrollador Front-end, creé un catálogo de libros
                  digitales con filtros de búsqueda, diseñé las tarjetas
                  individuales para cada libro y colaboré en el desarrollo del
                  header y footer en estrecha coordinación con el equipo. Mi
                  enfoque se centró en la experiencia del usuario, garantizando
                  una navegación intuitiva y atractiva en este proyecto de
                  e-commerce especializado en libros digitales.
                </p>
      
                  <div className={style.projectButton}>
                    <div>
                      <img src={reactImage} alt="" />
                      <img src={expressImage} alt="" />
                      <img src={tailwindImage} alt="" />
                      <img src={mongoDbImage} alt="" />
                    </div>
                    <div className={style.hrefButton}>
                    <a href="https://c15-58-readlygoods.vercel.app/" target="_blank">
                      {"Ver más"}
                    </a>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seccion de Templates */}
      <div className={style.titleContainer}>
        <h2 className={style.title}>Templates</h2>
      </div>
      <div className={style.project}>
        <div className={style.eachProject}>
          <div className={style.projectStyle}>
            <img
              className={style.imageProject}
              src={templateUnoPicture}
              alt="caravanaShot"
            />
            <div className={style.projectStyleBack}>
              <div className={style.projectStyleDetail}>
                <h3>Template 1</h3>
                <p>
                  Template creado para una empresa tecnologica proveedora de
                  software para startups.
                </p>
                <div className={style.projectButton}>
                  <div>
                    <img src={reactImage} alt="" />
                    <img src={cssImage} alt="" />
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
          <div className={style.projectStyle}>
            <img
              className={style.imageProject}
              src={templateDosPicture}
              alt="apiDogShot"
            />
            <div className={style.projectStyleBack}>
              <div className={style.projectStyleDetail}>
                <h3>Template 2</h3>
                <p>
                  Template creado para un Pub y distribuidor de licores con
                  servicio tanto en tienda como en linea.
                </p>
                <div className={style.projectButton}>
                  <div>
                    <img src={reactImage} alt="" />
                    <img src={cssImage} alt="" />
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
          <div className={style.projectStyle}>
            <img
              className={style.imageProject}
              src={templateTresPicture}
              alt="readlyGoods"
            />
            <div className={style.projectStyleBack}>
              <div className={style.projectStyleDetail}>
                <h3>Template 3</h3>
                <p>
                  Template creado para una empresa de metalmecanica con venta en
                  linea de productos para almacenaje industrial.
                </p>
                <div className={style.projectButton}>
                  <div>
                    <img src={reactImage} alt="" />
                    <img src={cssImage} alt="" />
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
    </div>
  );
}
