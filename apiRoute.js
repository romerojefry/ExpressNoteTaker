const fs = require("fs");
const notesData= []; 

module.exports = function(app){
    
    app.get("/api/notes", function(req, res){
    notesData =fs.readFileSync("db.json", "utf8");
    //to make it where notes is an array of objects
    notesData = JSON.parse(notesData);
    
    //sent through browser    
    res.json(notesData);
    });
}
