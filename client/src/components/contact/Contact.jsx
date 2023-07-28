// Importar los íconos que desees utilizar
import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import s from "./Contact.module.css";
import Form from '../form/Form';
import Logo from './logoW.png';




function Contact() {
  // Resto del código...

  return (
    <div className={s.container}>
      {/* ... (resto del componente sin cambios) ... */}
      <div className={s.contact}>
        <div className={s.hours}>
        <h3>Horarios de atención:</h3>
          <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p>Sábado y Domingo: Cerrado</p>
        </div>
        <div className={s.social}>
          <h3>Síguenos en redes sociales:</h3>
          {/* <a href="https://facebook.com/tu-pagina">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com/tu-pagina">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com/tu-pagina">
            <FaInstagram size={24} />
          </a> */}
          <a href="https://wa.me/1123490811">
            <img src={Logo} alt="WhatsApp" />
          </a>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0374829174343!2d-58.47726342336644!3d-34.62849305880868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc992089b78d3%3A0x71759abe12be2d7d!2sCentro%20Comercial%20Flores%2C%20Bogot%C3%A1%203172%2C%20C1406GCH%20CABA!5e0!3m2!1ses-419!2sar!4v1690316811895!5m2!1ses-419!2sar"
  width="800"
  height="600"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </div>
        <div className={s.contactForm}>
          <h3>Déjanos un mensaje</h3>
          <Form />
        </div>
        {/* Agregar los demás elementos de contacto aquí */}
      </div>
      {/* ... (resto del componente sin cambios) ... */}
    </div>
  );
}

export default Contact;
