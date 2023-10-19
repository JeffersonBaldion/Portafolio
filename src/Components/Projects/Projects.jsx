import style from "./Projects.module.css";
import React from "react";
import caravanaShot from '../../Assets/CaravanaShot.png'
import apiDogShot from '../../Assets/ApiDogShot.png'
import expressJs from '../../Assets/express.png'
import imageJavascript from '../../Assets/javascript.png'
import imageReact from '../../Assets/react.png'
import imageRedux from '../../Assets/Redux.png'
import imagePostgresql from '../../Assets/Postgresql.png'
import imageTailwind from '../../Assets/Tailwind.png'
import imageHtml from '../../Assets/Html.png'
import imageCss from '../../Assets/Css.png'

const reactImage = imageReact
const expressImage = expressJs
const tailwindImage = imageTailwind
const cssImage = imageCss
const dbImage = imagePostgresql

const projects = [{
  name: 'caravana',
  image: caravanaShot,
  url:"",
  front: reactImage,
  back:expressImage,
  style:tailwindImage,
  database:dbImage
},{
    name: 'apidogs',
    image: apiDogShot,
    url:"",
    front:reactImage,
    back:expressImage,
    style:cssImage,
    database:dbImage
}]

  
export default function Projects() {
  const [active, setActive] = React.useState(projects[0]);

  const selectHandler = (e) => {
    const {value} = e.target
    if (value == "caravana"){
        setActive(projects[0])
    }
    else if(value == 'apidogs'){
        setActive(projects[1])
    }
    
  };

  console.log(active.image)
  return (
    <div className={active.name=='caravana' ? style.backgroundCaravana : style.backgroundApiDogs}>
        <div className={style.projectsContainer}>
            <h2>Mis proyectos</h2>
        <div className={style.projectTitles}>
            <button value='caravana' onClick={selectHandler}>Caravana</button>
            <button value='apidogs' onClick={selectHandler}>ApiDogs</button>
        </div>
        <div className={style.toogleProject}>
            {active.name == "caravana" ? (
            <div className={style.project}>
                <img src={active.image} alt="Caravana"/>
                <div className={style.projectTecContainer}>
                    <div className={style.projectTec}>
                    <img src={active.front} alt="" />
                    <img src={active.back} alt="" />
                    <img src={active.style} alt="" />
                    <img src={active.database} alt="" />
                    </div>
                    <div className={style.link}>
                    <a href="https//www.google.com" target="blank" > LINK </a>
                    </div>
                </div>
                
            </div>
            
            ) : active.name == "apidogs" ? (
                <div className={style.project}>
                <img src={active.image} alt="apidogs"/>
                <div className={style.projectTecContainer}>
                    <div className={style.projectTec}>
                    <img src={active.front} alt="" />
                    <img src={active.back} alt="" />
                    <img src={active.style} alt="" />
                    <img src={active.database} alt="" />
                    </div>
                    <div className={style.link}>
                    <a href="google.com" target="blank" > LINK </a>
                    </div>
                </div>
            </div>
            ) : null}
        </div>
        {/* <div className={style.tecnologia}>
            <div className={style.tecnologiaDetail}>
                <img src={active.front} alt="" />
            </div>
            <div className={style.tecnologiaDetail}>
                <img src={active.back} alt="" />
            </div>
            <div className={style.tecnologiaDetail}>
                <img src={active.style} alt="" />
            </div>
            <div className={style.tecnologiaDetail}>
                <img src={active.database} alt="" />
            </div>
        
            <div className={style.tecnologiaDetail}>LINK</div>
        </div> */}
        </div>
    </div>
  );
}
