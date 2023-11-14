import style from "./Projects.module.css";
import React from "react";
import caravanaShot from "../../Assets/CaravanaShot.png";
import apiDogShot from "../../Assets/ApiDogShot.png";
import expressJs from "../../Assets/express.png";
import imageJavascript from "../../Assets/javascript.png";
import imageReact from "../../Assets/react.png";
import imageRedux from "../../Assets/Redux.png";
import imagePostgresql from "../../Assets/Postgresql.png";
import imageTailwind from "../../Assets/Tailwind.png";
import imageHtml from "../../Assets/Html.png";
import imageCss from "../../Assets/Css.png";

const reactImage = imageReact;
const expressImage = expressJs;
const tailwindImage = imageTailwind;
const cssImage = imageCss;
const dbImage = imagePostgresql;

const projects = [
  {
    name: "caravana",
    image: caravanaShot,
    url: "",
    front: reactImage,
    back: expressImage,
    style: tailwindImage,
    database: dbImage,
  },
  {
    name: "apidogs",
    image: apiDogShot,
    url: "",
    front: reactImage,
    back: expressImage,
    style: cssImage,
    database: dbImage,
  },
];

export default function Projects() {
  return (
    <div className={style.projectContainer}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>Projectos</h2>
      </div>
      <div className={style.project}>
        <div className={style.caravana}>
          <img src={caravanaShot} alt="caravanaShot" />
          <div className={style.caravanaBack}>
            <div className={style.caravanaDetail}>
              <h3>Caravana</h3>
              <p>
                Es un proyecto desarrollado para una ONG que consiste en una
                bolsa de empleo especializada en personas con alguna
                discapacidad.
              </p>
              <div>
                <button><ion-icon name="logo-github"></ion-icon></button>
                <button><ion-icon name="link"></ion-icon></button>
              </div>
              <div>
                <img src={projects[0].front} alt="react" />
                <img src={projects[0].back} alt="react" />
                <img src={projects[0].style} alt="react" />
                <img src={projects[0].database} alt="react" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.apiDog}>
          <img src={apiDogShot} alt="apiDogShot" />
          <div className={style.apiDogBack}>
            <div className={style.apiDogDetail}>
              <h3>ApiDog</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi non arcu risus quis varius. Maecenas ultricies mi eget
                mauris pharetra.
              </p>
              <div>
              <button><ion-icon name="logo-github"></ion-icon></button>
                <button><ion-icon name="link"></ion-icon></button>
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
      </div>
    </div>
  );
}
