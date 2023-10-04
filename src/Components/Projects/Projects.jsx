import style from "./Projects.module.css";
import React from "react";
import caravanaShot from '../../Assets/CaravanaShot.png'
import apiDogShot from '../../Assets/ApiDogShot.png'

const reactImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
const expressImage = 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'
const tailwindImage = 'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png'
const cssImage = 'https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png'
const dbImage = 'https://w7.pngwing.com/pngs/358/849/png-transparent-postgresql-database-logo-database-symbol-blue-text-logo-thumbnail.png'

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
        <div className={style.projectTitles}>
            <button value='caravana' onClick={selectHandler}>Caravana</button>
            <button value='apidogs' onClick={selectHandler}>ApiDogs</button>
        </div>
        <div className={style.toogleProject}>
            {active.name == "caravana" ? (
            <img src={active.image} alt="Caravana"/>
            ) : active.name == "apidogs" ? (
            <img src={active.image} alt="ApiDogs"/>
            ) : null}
        </div>
        <div className={style.tecnologia}>
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
        </div>
        </div>
    </div>
  );
}
