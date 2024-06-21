const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            roll: {
                type: DataTypes.ENUM("TA", "Alumno"),
                allowNull: false,
            },
        },
        { timestamps: false }
    );
};
