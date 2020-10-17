const fs = require("fs");
const path = require("path");
var notesData =fs.readFileSync("db.json", "utf8");

module.exports = function(app){


app.get("/api/notes", function(req, res){
    notesData =fs.readFileSync("db.json", "utf8");
    //to make it where notes is an array of objects
    notesData = JSON.parse(notesData);
    
//sent through browser    
res.json(notesData);
});

//adding notes
app.post("/api/notes", function(req,res){
    notesData = req.body;
    fs.readFile("db.json", "utf8", function(notesData)
  });

 //delete
 app.delete("/api/notes/:id", function(req, res){
    fs.writeFile("db.json", JSON.stringify(notesData),function(error){
        if(err)throw(err);
    });
    console.log("deleted")
}
