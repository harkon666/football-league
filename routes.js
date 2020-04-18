const controller = require("./controller");

module.exports = function (app) {
  app.get("/football/leaguestanding", controller.leagueStandings);
  app.post("/football/recordgame", controller.recordGame);
  app.get("/football/rank", controller.rank);
};
