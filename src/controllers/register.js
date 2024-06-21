const { User } = require("../../DB_connection");

const register = async (req, res) => {
    const { name, password, roll } = req.body;

    if (!name || !password || !roll) {
        res.status(400).json({ message: "Faltan datos" });
    }

    try {
        const userFind = await User.findOne({
            where: { name },
        });

        if (userFind) {
            return res.status(404).json({ message: "El usuario ya existe" });
        }

        const create = await User.create({ name, password, roll });
        res.status(200).json({ access: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = register;
