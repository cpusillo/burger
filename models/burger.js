const orm = require("../config/orm.js");
/*
Also inside burger.js, create the code
that will call the ORM functions using burger specific input for the ORM.

Export at the end of the burger.js file.
*/

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    }
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
