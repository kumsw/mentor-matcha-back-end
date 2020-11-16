const express = require("express");
const { router } = require("./routes/data");

// const port = 5000;
const port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

var bodyParser = require("body-parser");
const cors = require("cors");

//Initialise app
const app = express();

app.use(cors());

app.use(bodyParser.json());

//hand the router to app
app.use("/", router);

app.listen(port, function () {
  console.log(`Listenting on port ${port}`);
});
