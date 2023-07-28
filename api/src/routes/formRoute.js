const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const { GMAIL_USER, GMAIL_PASS } = process.env;


// Configura el transporte de nodemailer (debes configurar tus propias credenciales SMTP)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: GMAIL_USER, // Tu dirección de correo Gmail
    pass: GMAIL_PASS, // Tu contraseña de Gmail
  },
});

// Ruta para manejar el envío del formulario de contacto
router.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: GMAIL_USER, // Debe ser el mismo correo que se usó en el transporter
    to: 'fabio.mansilla07@gmail.com', // La dirección de correo donde quieres recibir el mensaje
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el mensaje.');
    } else {
      console.log('Correo enviado:', info.response);
      res.status(200).send('Mensaje enviado correctamente.');
    }
  });
});

module.exports = router;
