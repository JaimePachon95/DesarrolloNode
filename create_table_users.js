var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "user_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, document_number BIGINT, name VARCHAR(100), last_name VARCHAR(100))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});