const { User } = require("../../DB_connection");

const getAllUsers = async (req, res) => {
    try {
        const allusers = await User.findAll();

        res.status(200).json(allusers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = getAllUsers;
