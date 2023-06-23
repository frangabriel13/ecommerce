const { Router } = require("express");
const { User } = require('../db');
const bcryptjs = require("bcryptjs");

const router = Router();

router.post("/register", async (req, res) => {
  let { name, lastName, email, password, isAdmin, phone } = req.body;
  try {
    const userExist = await User.findOne({ where: { email } });
    if(userExist) {
      return res.status(409).json({ message: 'El usuario ya existe' });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    let createUser = await User.create({
      name,
      lastName,
      email,
      isAdmin,
      password: hashPassword,
      phone,
    });
    res.status(201).json(createUser);
  } catch (error) {
    console.log('Error al registrar el usuario', error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
});


module.exports = router;