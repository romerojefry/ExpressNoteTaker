const path = require("path");
const fs = require("fs")
// api request

module.exports = function(app){
    app.get("/notes", function(req,res){
        res.sendFile(path.join(__dirname,"/notes.html"));
    
    });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname,"/index.html"));
    });
};