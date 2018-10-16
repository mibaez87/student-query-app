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

  app.get("/api/:fieldoperatorsearched?", function (req, res) {
    let field = req.params.field;
    let operator = req.params.operator;
    let searched = req.params.searched;

    // console.log(field, operator, searched);

    orm.stuSearch(field, operator, searched, function (results) {
      res.json(results);
    });
  });
};
