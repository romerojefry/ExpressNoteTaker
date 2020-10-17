// my dependencies
const fs = require("fs");
const express = require("express");
const path = require ("path");


//browser and heroku and setting up express
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

//routes

require("./routes/htmlRoute")(app);
require("./routes/apiRoute")(app);




//server start listener
app.listen(PORT, function() {
    console.log("app is listening" + PORT);
});