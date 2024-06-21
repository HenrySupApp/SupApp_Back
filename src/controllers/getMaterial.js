const { Material } = require("../../DB_connection");

const getMaterial = async (req, res) => {
    try {
        const allMaterial = await Material.findAll();

        res.status(200).json(allMaterial);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = getMaterial;
