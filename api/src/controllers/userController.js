const { User } = require('../db');

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, email, password, phone, isAdmin } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    user.name = name || user.name;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.isAdmin = isAdmin || user.isAdmin;
    user.password = password || user.password;
    user.phone = phone !== undefined ? phone : user.phone;
    await user.save();

    res.status(200).json({ message: "Usuario actualizado con éxito" });
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await User.destroy({ where: { id: id } });
    return deletedUser;
  } catch(error) {
    console.log(error);
  }
};


module.exports = {
  getUserById,
  updateUser,
  deleteUser
}