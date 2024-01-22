const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./Routes/Router");

const server = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

server.use(express.json());
server.use(morgan("dev"));
server.use(cors(corsOptions));
server.use("/", routes);

module.exports = server;