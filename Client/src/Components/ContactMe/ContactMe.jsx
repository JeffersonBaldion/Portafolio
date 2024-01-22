import style from "./ContactMe.module.css";
import mailImage from "../../Assets/mail.png";
import locationImage from "../../Assets/location.png";
import gitImage from "../../Assets/github.png";
import LinkedInImage from "../../Assets/linkedIn.png";
import phoneImage from "../../Assets/phone.png";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContactMe() {
  const [contactForm, setContactForm] = React.useState({
    name: "",
    phone: "",
    mail: "",
    message: "",
  });

  const [showAlert, setShowAlert] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault()
    const { name } = e.target;
    if (name == "send") {
      try {
        await axios.post("https://portafolio-blue-six.vercel.app/mail", contactForm)
        setShowAlert(true);
        setTimeout(()=>{
          setShowAlert(false);
        }, 3000)
        setContactForm({
          name: "",
          phone: "",
          mail: "",
          message: "",
        });
      } catch (error) {
        window.alert(error)
      }
    }
    
  };

  console.log(showAlert);

  return (
    <div className={style.mainContainer}>
      <div className={style.title}>
        <h1>Contactame</h1>
      </div>
      <div className={style.mainTable}>
        <div className={style.formHeader}>
          <div className={style.logo}>
            <div className={style.logoContainer}>
              <p>Jeff</p>
              <p className={style.tm}>TM</p>
            </div>
          </div>
        </div>
        <div className={style.mainForm}>
          <div className={style.infoForm}>
            <div className={style.headerText}>
              <h3>
                Deja tu <span>mensaje</span>
              </h3>

              <h5>
                Enviame tus comentarios y sugerencias a través del siguiente
                formulario
              </h5>
            </div>
            <div className={style.dataContainer}>
              <div className={style.infoData}>
                <img src={phoneImage} alt="" />
                <h4>+57 (322) 4776601</h4>
              </div>
              <div className={style.infoData}>
                <img src={mailImage} alt="" />
                <h4>Jefferson.baldion.b@gmail.com</h4>{" "}
              </div>
              <div className={style.infoData}>
                <img src={locationImage} alt="" />
                <h4>Bogota/Colombia</h4>{" "}
              </div>
            </div>
            <div className={style.redes}>
              <img src={mailImage} alt="LinkedIn" />
              <img src={gitImage} alt="Github" />
              <img src={LinkedInImage} alt="Correo" />
            </div>
          </div>
          <div className={style.formContainer}>
            <div className={style.formUno}>
              <div className={style.formInput}>
                <label>Nombre</label>
                <input
                  onChange={handleChange}
                  name="name"
                  value={contactForm.name}
                  type="text"
                  placeholder="Jefferson Baldion"
                />
              </div>
              <div className={style.formInput}>
                <label>Telefono</label>
                <input
                  onChange={handleChange}
                  name="phone"
                  value={contactForm.phone}
                  type="text"
                  placeholder="+57 (322) 477 6601"
                />
              </div>
            </div>
            <div className={style.formDos}>
              <div className={style.formInput}>
                <label>Correo electronico</label>
                <input
                  onChange={handleChange}
                  name="mail"
                  value={contactForm.mail}
                  type="text"
                  placeholder="Jefferson.Baldion.b@gmail.com"
                />
              </div>
            </div>
            <div className={style.formTres}>
              <div className={style.formInput}>
                <label>Mensaje</label>
                <textarea
                  onChange={handleChange}
                  name="message"
                  value={contactForm.message}
                  placeholder="Hola Jefferson"
                />
              </div>
            </div>
            <div className={style.formButton}>
              <button onClick={handleClick} name="send">
                Enviar
              </button>
              <button>Limpiar</button>
            </div>
            {showAlert?<div className={style.alerta}><p>Enviado satisfactoriamente</p></div>:null}
          </div>
        </div>
      </div>
    </div>
  );
}
