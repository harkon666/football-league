const models = require("./models");
const ClubStanding = models.clubstanding;

exports.leagueStandings = async (req, res) => {
  try {
    const data = await ClubStanding.findAll({
      attributes: { exclude: ["id", "createdAt", "updatedAt"] },
    });
    return res.status(200).json({ status: "success", statusCode: 200, data });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.name });
  }
};

exports.recordGame = async (req, res) => {};
