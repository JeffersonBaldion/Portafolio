import style from "./ContactMelight.module.css";
import phoneIcon from "../../Assets/phoneIcon.svg";
import mailIcon from "../../Assets/mailIcon.svg";
import locationIcon from "../../Assets/locationIcon.svg";
import linkedInIcon from "../../Assets/linkedInIcon.svg";
import instagramIcon from "../../Assets/instagramIcon.svg";
import facebookIcon from "../../Assets/facebookIcon.svg";
import React from "react";
import validate from "./validation";
import axios from "axios";

export default function ContactMeLight() {
  const [errors, setErrors] = React.useState({});
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

  React.useEffect(() => {
    setErrors(validate(contactForm));
  }, [contactForm]);

  const handleClick = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (name == "send") {
      setErrors(validate(contactForm));
      if (Object.keys(errors).length === 0) {
        try {
          await axios
            .post("https://portafolio-blue-six.vercel.app/mail", contactForm)
            .then(function (response) {
              setShowAlert(true);
              setTimeout(() => {
                setShowAlert(false);
              }, 3000);
            })
            .catch(function (error) {
              window.alert(error);
            });
        } catch (error) {
          window.alert(error);
        }
      } else {
        return;
      }
    } else {
      setContactForm({
        name: "",
        phone: "",
        mail: "",
        message: "",
      });
    }
  };

  return (
    <div className={style.contactMeContainer}>
      <div className={style.infoContainer}>
        <div className={style.infoTitle}>
          <h2>Deja tu mensaje</h2>
          <h3>
            Enviame tus comentarios y sugerencias a través del siguiente
            formulario
          </h3>
        </div>
        <div className={style.contactIcon}>
          <div className={style.eachContact}>
            <img src={phoneIcon} alt="" />
            <label htmlFor="">+57 (322) 4776601</label>
          </div>
          <div className={style.eachContact}>
            <img src={mailIcon} alt="" />
            <label htmlFor="">Jefferson.baldion.b@gmail.com</label>
          </div>
          <div className={style.eachContact}>
            <img src={locationIcon} alt="" />
            <label htmlFor="">Bogota/Colombia</label>
          </div>
        </div>
        <div className={style.redes}>
          <img src={instagramIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={linkedInIcon} alt="" />
        </div>
      </div>
      <div className={style.formularioContainer}>
        <div>
          <input
            onChange={handleChange}
            name="name"
            value={contactForm.name}
            placeholder="Nombre"
            type="text"
          />
          {errors.errorName ? <p>{errors.errorName}</p> : null}
        </div>
        <div>
          <input
            onChange={handleChange}
            name="phone"
            value={contactForm.phone}
            placeholder="Número de telefono"
            type="number"
          />
          {errors.errorPhone ? <p>{errors.errorPhone}</p> : null}
        </div>
        <div>
          <input
            onChange={handleChange}
            name="mail"
            value={contactForm.mail}
            placeholder="Correo electronico"
            type="text"
          />
          {errors.errorMail ? <p>{errors.errorMail}</p> : null}
        </div>
        <div>
          <textarea
            placeholder="Envía tu mensaje..."
            onChange={handleChange}
            name="message"
            width="300px"
            value={contactForm.message}
          />
          {errors.errorMessage ? <p>{errors.errorMessage}</p> : null}
          <div className={style.btnContainer}>
          {showAlert ? (
              <div className={style.alerta}>
                <h2>Enviado satisfactoriamente</h2>
              </div>
            ) : null}

            <button onClick={handleClick} name="send">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
