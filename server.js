// Dependencies
// =============================================================
const express = require("express");
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
let PORT = process.env.PORT || 8081;

var db = require('./models')

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(path.join(__dirname, "public")))

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
//require("./routes/api-routes")(app);
require("./routes/view-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({  }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});