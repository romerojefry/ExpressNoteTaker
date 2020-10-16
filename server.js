const fs = require("fs");
const express = require("express");
const path = require ("path");


//browser and heroku 
const PORT = process.env.PORT || 3000;

//adding data araay
notesData= [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.joint(__dirname, "public")));

//routes

require("./routes/htmlRoute")(app);
require("./routes/apiRoute")(app);

//server 
app.listen(PORT, function() {
    console.log("app is listening" = PORT);
})