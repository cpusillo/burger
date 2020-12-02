var connection = require("./connection.js");

var orm = {
    /*
    selectAll()
    insertOne()
    updateOne()
    deleteOne()
*/
// SelectAll queries a table for all information.
selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;
