const express = require("express");
const burger = require("../models/burger.js")

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "public/index.html"));
});

router.get("/burgers", function(req,res){
    burger.selectAll(function(data){
        res.json({burgers: data});
    })
})

module.exports = router;