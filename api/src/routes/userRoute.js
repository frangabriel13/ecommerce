const { Router } = require("express");
const { User } = require('../db');
const { getUserById, updateUser, deleteUser } = require('../controllers/userController');

const router = Router();


router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch(error) {
    console.log('Error al obtener los usuarios', error);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
});

router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "No se encontró el usuario" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener usuario mediante ID" });
  }
});

router.put("/users/:id", updateUser);

router.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await deleteUser(id);
    deletedUser
      ? res.status(200).json({ message: "Usuario eliminado con éxito" })
      : res.status(404).json({ message: "Usuario no encontrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar usuario" });
  }
});


module.exports = router;