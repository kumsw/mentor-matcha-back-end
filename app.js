const express = require("express");
const { router } = require("./routes/data");
const port = 5000;

//Initialise app
const app = express();

//hand the router to app
app.use("/", router);

app.listen(port, function () {
  console.log(`Listenting on port ${port}`);
});
