var connection = require("./connection.js");

var tableName = "name";
var tableAddress = "address";

var orm = {

  stuNames: function (callback) {
    var s = `SELECT * FROM  ${tableName}`;
    connection.query(s, function (err, result) {
      callback(result);
    });
  },

  stuAddresses: function (callback) {
    var s = `SELECT * FROM ${tableAddress}`;
    connection.query(s, function (err, result) {
      callback(result);
    });
  },

  stuAll: function (callback) {
    var s = `SELECT ${tableName}.student_id, first_name, last_name, DOB, address, city, county, state, zip FROM ${tableName} INNER JOIN ${tableAddress} ON ${tableName}.student_id = ${tableAddress}.student_id`;
    connection.query(s, function (err, result) {
      callback(result);
    });
  },

  stuSearch: function (field, operator, searched, callback) {
    // var s = "SELECT " + tableName + ".student_id, first_name, last_name, DOB, address, city, county, state, zip FROM " + tableName + " INNER JOIN " + tableAddress + " ON " + tableName + ".student_id =" +  tableAddress + ".student_id WHERE " + field + operator + "'" + searched + "'";
    var s = `SELECT ${tableName}.student_id, first_name, last_name, DOB, address, city, county, state, zip FROM ${tableName} INNER JOIN ${tableAddress} ON ${tableName}.student_id = ${tableAddress}.student_id WHERE (${field} ${operator} "${searched}")`;
    // console.log(s);
    connection.query(s, function (err, result) {
      if (err) {
        throw err
      }
      callback(result);
    });
  }
};

module.exports = orm;


