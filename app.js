require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT;

app.use(cors);

//import routes here

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

//use routes here
app.use("/api");

//listen port here
console.log(`great you have connected, started on port: ${port}`);
app.listen(port);