import style from "./Header.module.css";
import { useState } from "react";
import menuLogo from "../../Assets/menuLogo.png"
import exitLogo from "../../Assets/exitLogo.png"

export default function Header() {
  const [dropDownShow, setDropDownShow] = useState(false);
  const handlerClick = () => {
    setDropDownShow(!dropDownShow);
  };

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
        <a
          href="https://drive.usercontent.google.com/u/0/uc?id=1u6lVB8tXz6vBd0ZXxjUS4sTlbfOHLbaz&export=download"
          download="CV JeffersonBaldion.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={style.buttonCv}
        >
          Descargar CV
        </a>
      </div>

      <div className={style.dropDownContainer}>
        <div onClick={handlerClick} className={style.dropDownLogo}>
          <img src={menuLogo} alt="Menu Logo" />
        </div>
        {dropDownShow ? (
          <div className={style.dropDown}>
            <div className={style.dropDownExit}>
              <button onClick={handlerClick}><img src={exitLogo} alt="" /></button>
            </div>
            
            <a className={style.link} href="#aboutMe">
              Sobre mi
            </a>
            <a className={style.link} href="#projects">
              Proyectos
            </a>
            <a className={style.link} href="#contactame">
              Contactame
            </a>
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1u6lVB8tXz6vBd0ZXxjUS4sTlbfOHLbaz&export=download"
          download="CV JeffersonBaldion.pdf"
          target="_blank"
          rel="noopener noreferrer" className={style.download}>Descargar CV</a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
