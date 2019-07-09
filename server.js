var express = require("express");
var path = require("path"); 
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`App listening on PORT `+ PORT);
});
//links to html front end
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "App/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "App/public/survey.html"));
});

// connecting to API routes
require("./App/routing/apiRoutes.js")(app)
require("./App/routing/htmlRoutes.js")(app)
