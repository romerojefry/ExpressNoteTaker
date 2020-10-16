const fs = require("fs");
const express = require("express");
const path = require ("path");


//browser and heroku 
const PORT = process.env.PORT || 3000;


//routes

require("./routes/htmlRoute")(app);
require("./routes/apiRoute")(app);

