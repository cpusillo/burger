var connection = require("./connection.js");

var orm = {
    /*
    selectAll()
    insertOne()
    updateOne()
    deleteOne()
*/
// all queries a table for all information.
all: function(tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},
};

module.exports = orm;
