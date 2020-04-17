require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors);
app.listen(process.env.PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
