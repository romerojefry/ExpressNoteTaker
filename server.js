// my dependencies
const fs = require("fs");
const express = require("express");
const path = require ("path");


//browser and heroku and setting up express
const app = express();
const PORT = process.env.PORT || 3000;

//adding data araay
notesData= [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.joint(__dirname, "public")));

//routes

require("./routes/htmlRoute")(app);
require("./routes/apiRoute")(app);

//
app.get("/api/notes", function(req, res){
    notesData =fs.readFileSync("Develop/db/db.json", "utf8");
    //to make it where notes is an array of objects
    notesData = JSON.parse(notesData);
    
//sent through browser    
res.json(notesData);
});


//server start listener
app.listen(PORT, function() {
    console.log("app is listening" = PORT);
});