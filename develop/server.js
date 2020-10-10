// Dependencies
// =============================================================
const express = require("express");
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
let PORT = process.env.PORT || 8080;

var db = require('./models')

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(path.join(__dirname, "public")))

// Routes
// =============================================================
require("./routes/api-routes")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({  }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});