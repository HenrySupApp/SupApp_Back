const { Sequelize } = require("sequelize");
const UserModel = require("./src/models/User");
const MaterialModel = require("./src/models/Material");

const sequelize = new Sequelize(
    "postgres://harrysupapp_user:ljuk5j6FDY4y8Xa7lqwWrkRnkl9fgCFf@dpg-cpq6luss1f4s73cffcng-a.oregon-postgres.render.com/harrysupapp",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        logging: false,
        native: false,
    }
);

UserModel(sequelize);
MaterialModel(sequelize);

const { User, Material } = sequelize.models;

sequelize
    .sync() // Esto asegura que las tablas estén creadas
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch((err) => {
        console.error("Error sincronizando tablas:", err);
    });

module.exports = {
    User,
    Material,
    conn: sequelize,
};
