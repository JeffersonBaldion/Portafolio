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
      <div className={style.titleContainer}>
        <h2 className={style.title}>Proyectos</h2>
      </div>
      <div className={style.project}>
        <div className={style.eachProject}>
          <div className={style.projectStyle}>
            <img
              className={style.imageProject}
              src={projects[0].image}
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
                  <a href={projects[0].url} target="_blank">
                    {"Enlace "}
                    <p>
                      <ion-icon name="link"></ion-icon>
                    </p>
                  </a>
                </div>
                <div className={style.imgProject}>
                  <img src={projects[0].front} alt="react" />
                  <img src={projects[0].back} alt="react" />
                  <img src={projects[0].style} alt="react" />
                  <img src={projects[0].database} alt="react" />
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
                  <a href={projects[1].gitUrl} target="_blank">
                    {"Github "}
                    <p>
                      <ion-icon name="logo-github"></ion-icon>
                    </p>
                  </a>
                </div>
                <div>
                  <img src={projects[1].front} alt="react" />
                  <img src={projects[1].back} alt="react" />
                  <img src={projects[1].style} alt="react" />
                  <img src={projects[1].database} alt="react" />
                </div>
              </div>
            </div>
          </div>
          <div className={style.projectStyle}>
            <img
              className={style.imageProject}
              src={projects[2].image}
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
                  <a href={projects[2].url} target="_blank">
                    {"Enlace "}
                    <p>
                      <ion-icon name="link"></ion-icon>
                    </p>
                  </a>
                </div>
                <div>
                  <img src={projects[2].front} alt="React" />
                  <img src={projects[2].back} alt="Express" />
                  <img src={projects[2].style} alt="Tailwind" />
                  <img src={projects[2].database} alt="MongoDB" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
