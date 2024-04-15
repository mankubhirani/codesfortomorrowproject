const mysql = require('mysql2');

const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'codes for tomorrow'
  });
  dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
  module.exports = dbConn;