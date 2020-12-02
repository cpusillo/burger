var mysql = require("mysql");

var connection = mysql.createPool({
  HOST: "us-cdbr-east-02.cleardb.com",
  USER: "bb46dc47d7994e",
  PASSWORD: "8b7f35c5",
  DB: "heroku_d94fa42ebf84e03"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
