const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const http = require("http");
const { conn } = require("./DB_connection");
const routerPath = require("./src/routes/index");

const port = process.env.PORT ?? 3000;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: { origin: "*" },
});

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/", routerPath);

conn.sync({ force: true });

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
