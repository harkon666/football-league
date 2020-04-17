const controller = require("./controller");

module.exports = function (app) {
  app.get("/football/leaguestanding", controller.leagueStandings);
};
