const models = require("./models");
const ClubStanding = models.clubstanding;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.leagueStandings = async (req, res) => {
  try {
    //find all data order by point DESC
    const data = await ClubStanding.findAll({
      attributes: { exclude: ["id", "createdAt", "updatedAt"] },
      order: [["points", "DESC"]],
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.name });
  }
};

exports.recordGame = async (req, res) => {
  try {
    const { clubhomename, clubawayname, score } = req.body;
    const splitedString = score.split(":");
    let selected, points, message;

    //condition to decide who win
    if (splitedString[0] > splitedString[1]) {
      selected = clubhomename;
      points = 3;
      message = `${clubhomename} win`;
    } else if (splitedString[0] === splitedString[1]) {
      selected = [clubhomename, clubawayname];
      points = 1;
      message = `${clubhomename} and ${clubawayname} draw`;
    } else {
      selected = clubawayname;
      points = 3;
      message = `${clubawayname} win`;
    }

    //check if name's club is correct
    const check = await ClubStanding.findAll({
      where: { clubname: selected },
    });

    if (check.length < 2 && points === 1)
      return res
        .status(404)
        .json({ status: "not found", error: "name is not match" });
    if (check.length < 1 && points === 3)
      return res
        .status(404)
        .json({ status: "not found", error: "name is not match" });

    //if correct then update point
    await ClubStanding.increment("points", {
      by: points,
      where: {
        clubname: selected,
      },
    });

    return res.status(200).json({ message });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.name });
  }
};
