require("dotenv").config();
const routes = require("./routes");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

//use routes here
routes(app);

//listen port here
app.listen(port, () =>
  console.log(`great you have connected, started on port: ${port}`)
);
