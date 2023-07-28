
import React, { useRef, useState } from "react";
import s from "./Form.module.css";
import emailjs from 'emailjs-com';


const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tnnnfvr', 'template_3eqdrig', form.current, 'xZ9ZO9Eb1IryQGDeI')
      .then((result) => {
          // console.log(result.text);
          alert("El correo electrónico se envió correctamente.");
          setName("");
          setEmail("");
          setMessage("");
      }, (error) => {
          alert("Ocurrió un error al enviar el correo electrónico.");
          console.log(error.text);
      });
  };

  return (
    <div className={s.container} id="contact">
      <h2 className={s.title}>Contact <span>Me</span></h2>
      <div className={s.wrapper}>
        <div className={s.contact}>
          <div className={s.info}>
            <h4>Informacion de contacto</h4>
            <p>Contactame por mail llenando el formulario de contacto, o bien, hazlo por las redes.</p>
            <a href="https://api.whatsapp.com/send?phone=541158742482" className={s.whatsappButton} target="_blank">
              WhatsApp
            </a>
            <div className={s.icons}>
              <div className={s.iconItem}>
                <i className='bx bx-phone'></i>
                <span>+54 11 5874 2482</span>
              </div>
              <div className={s.iconItem}>
                <i className='bx bx-envelope' ></i>
                <span>mansilla.franco.1@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={s.socialIcons}>
            <a href="https://www.linkedin.com/in/frangabriel13/" target="_blank">
              <i className={`bx bxl-linkedin ${s.icon}`}></i>
            </a>
            <a href="https://www.instagram.com/frangabriel.13/" target="_blank">
              <i className={`bx bxl-instagram ${s.icon}`}></i>
            </a>
            <a href="https://twitter.com/frangabriel13_/" target="_blank">
              <i className={`bx bxl-twitter ${s.icon}`}></i>
            </a>
            <a href="https://github.com/frangabriel13/" target="_blank">
              <i className={`bx bxl-github ${s.icon}`}></i>
            </a>
          </div>
        </div>
        <form className={s.form} ref={form} onSubmit={sendEmail}>
          <div className={`${s.inputGroup}`}>
            <input type="text" placeholder="Name" name="user_name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <textarea placeholder="Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          <button className={s.sendButton}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;