var orm = require("../config/orm.js");

module.exports = function (app) {

  app.get("/api/names", function (req, res) {
    orm.stuNames(function (dbname) {
      res.json(dbname);
    });
  });

  app.get("/api/addresses", function (req, res) {
    orm.stuAddresses(function (dbaddress) {
      res.json(dbaddress);
    });
  });

  app.get("/api", function (req, res) {
    orm.stuAll(function (dball) {
      res.json(dball);
    });
  });

  app.get("/api/:searched", function (req, res) {
    orm.stuSearch(req.params.searched, function (results) {
      res.json(results);
    });
  });
};
