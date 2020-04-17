const models = require("./models");
const ClubStanding = models.clubstanding;

exports.AllLeagueStandings = async (req, res) => {
  try {
    console.log("woi");
    const data = await ClubStanding.findAll({
      attributes: { exclude: ["createdAt, updatedAt"] },
    });
    return res.status(200).json({ status: "success", statusCode: 200, data });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.name });
  }
};
