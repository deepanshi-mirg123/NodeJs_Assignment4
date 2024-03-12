const DB = require("./db/connection");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
let app = express();
const userroute = require("./routes/userRoutes");
const port = 3000;

app.use(express.json());
app.use("*/data", userroute);

//Connection to start the server
app.listen(`${port}`, () => {
  console.log(`server has started on Port Number ${port}`);
});
