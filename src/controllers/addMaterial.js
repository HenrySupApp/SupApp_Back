const { Material } = require("../../DB_connection");

const addMaterial = async (req, res) => {
    const { title, description, link } = req.body;

    if (!title || !link) {
        res.status(400).json({ message: "Faltan datos" });
    }

    try {
        const create = await Material.create({ title, description, link });
        res.status(200).json({ message: `${title} se agrego correctamente al material complementario` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = addMaterial;
