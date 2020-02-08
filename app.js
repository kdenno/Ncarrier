const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// import routes
const adminroutes = require("./routes/adminroutes");
const userRoutes = require("./routes/userroutes");
const NotFound = require("./controllers/NotFound");

const app = express();

// register templating engine
app.set("view engine", "ejs");
app.set("views", "views");

// bring body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// grant static file imports
app.use(express.static(path.join(__dirname, "public")));

// use the routes
app.use("/admin", adminroutes.routes);
app.use(userRoutes);
app.use(NotFound.pagenotfound);
app.listen("3000");
