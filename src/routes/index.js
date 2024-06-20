const getLogin = require("../controllers/getLogin");
const register = require("../controllers/register");
const getAllUsers = require("../controllers/getAllUsers");
const getMaterial = require("../controllers/getMaterial");
const addMaterial = require("../controllers/addMaterial");

const express = require("express");
const routerPath = express.Router();

//* User:
routerPath.get("/login", getLogin);
routerPath.get("/users", getAllUsers);
routerPath.post("/register", register);

//* Material:
routerPath.get("/material", getMaterial);
routerPath.post("/material", addMaterial);

module.exports = routerPath;
