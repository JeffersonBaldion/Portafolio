import style from "./Header.module.css";
import { useState } from "react";

export default function Header() {

  const [dropDownShow, setDropDownShow] = useState(false)
  const handlerClick = ()=>{
    setDropDownShow(!dropDownShow)
  }

  return (
    <div className={style.headerContainer}>
      <div className={style.logo}>
        <div className={style.logoContainer}>
          <p>Jeff</p>
          <p className={style.tm}>TM</p>
        </div>
      </div>
      <div className={style.menu}>
        <a className={style.link} href="#aboutMe">
          Sobre mi
        </a>
        <a className={style.link} href="#projects">
          Proyectos
        </a>
        <a className={style.link} href="#contactame">
          Contactame
        </a>
      </div>
      <div className={style.buttonContainer}>
        <div className={style.buttonCv}>Descargar CV</div>
      </div>

      <div className={style.dropDownContainer}>
        <div onClick={handlerClick} className={style.dropDownLogo}>MENU</div>
        {dropDownShow?<div className={style.dropDown}>
          <a className={style.link} href="#aboutMe">
            Sobre mi
          </a>
          <a className={style.link} href="#projects">
            Proyectos
          </a>
          <a className={style.link} href="#contactame">
            Contactame
          </a>
          <button>Descargar CV</button>
        </div>:null}
        
      </div>
    </div>
  );
}
