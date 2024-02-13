import style from "./App.module.css";
import styleHeaderDark from "./Components/Header/Header.module.css";
import styleHeaderLight from "./Components/Header/HeaderLight.module.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import HomeLight from "./Components/Home/HomeLight";

import menuLogo from "./Assets/menuLogo.png";
import exitLogo from "./Assets/exitLogo.png";

function App() {
  const [styleHeader, setMood] = React.useState(styleHeaderLight);
  const [dropDownShow, setDropDownShow] = React.useState(false);
  const handlerClick = () => {
    setDropDownShow(!dropDownShow);
  };

  const handlerMood = () => {
    if (styleHeader == styleHeaderLight) {
      setMood(styleHeaderDark);
    } else {
      setMood(styleHeaderLight);
    }
  };

  return (
    <div>
      <div className={style.headerContainer}>
        <div className={styleHeader.headerContainer}>
          <div className={styleHeader.logo}>
            <div className={styleHeader.logoContainer}>
              <p>Jeff</p>
              <p className={styleHeader.tm}>TM</p>
            </div>
          </div>
          <div className={styleHeader.menu}>
            <a className={styleHeader.link} href="#aboutMe">
              Sobre mi
            </a>
            <a className={styleHeader.link} href="#projects">
              Proyectos
            </a>
            <a className={styleHeader.link} href="#contactame">
              Contactame
            </a>
          </div>
          <div className={styleHeader.buttonContainer}>
            <div className={styleHeader.toggle_switch}>
              <input
                onClick={handlerMood}
                type="checkbox"
                id="switch"
                className={styleHeader.checkbox}
              />
              <label htmlFor="switch" className={styleHeader.label}>
                <div className={styleHeader.switch}></div>
              </label>
            </div>

            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1u6lVB8tXz6vBd0ZXxjUS4sTlbfOHLbaz&export=download"
              download="CV JeffersonBaldion.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styleHeader.buttonCv}
            >
              Descargar CV
            </a>
          </div>

          <div className={styleHeader.dropDownContainer}>
            <div className={styleHeader.dropDownLogo}>
              <img onClick={handlerClick} src={menuLogo} alt="Menu Logo" />
              {dropDownShow ? (
                <div className={styleHeader.dropDown}>
                  <div className={styleHeader.dropDownExit}>
                    <button onClick={handlerClick}>
                      <img src={exitLogo} alt="" />
                    </button>
                  </div>

                  <a className={styleHeader.link} href="#aboutMe">
                    <ion-icon name="person"></ion-icon>
                  </a>
                  <a className={styleHeader.link} href="#projects">
                    <ion-icon name="construct"></ion-icon>
                  </a>
                  <a className={styleHeader.link} href="#contactame">
                    <ion-icon name="chatbubbles"></ion-icon>
                  </a>
                  <div className={styleHeader.toggle_switch}>
                    <input
                      onClick={handlerMood}
                      type="checkbox"
                      id="switchDrop"
                      className={styleHeader.checkbox}
                    />
                    <label htmlFor="switchDrop" className={styleHeader.label}>
                      <div className={styleHeader.switch}></div>
                    </label>
                  </div>
                  <a
                    href="https://drive.usercontent.google.com/u/0/uc?id=1u6lVB8tXz6vBd0ZXxjUS4sTlbfOHLbaz&export=download"
                    download="CV JeffersonBaldion.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styleHeader.download}
                  >
                    <ion-icon name="download-outline"></ion-icon>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className={style.contentContainer}>
        <Routes>
          {/* <Route path='/' element= {<Home/>}/>   */}
          {styleHeader == styleHeaderLight ? (
            <Route path="/" element={<HomeLight />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
