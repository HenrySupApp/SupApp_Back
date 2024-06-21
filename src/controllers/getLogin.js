const { User } = require("../../DB_connection");

const getLogin = async (req, res) => {
    const { name, password } = req.query;

    if (!name || !password) {
        return res.status(400).json({ message: "Faltan datos" });
    }

    try {
        const userFind = await User.findOne({
            where: { name },
        });

        if (!userFind) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const validacion = userFind.password === password;

        if (!validacion) {
            return res.status(403).json({ message: "Contraseña incorrecta" });
        }

        res.status(200).json({ access: validacion });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = getLogin;
