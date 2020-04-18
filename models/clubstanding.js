"use strict";
module.exports = (sequelize, DataTypes) => {
  const clubstanding = sequelize.define(
    "clubstanding",
    {
      clubname: DataTypes.STRING,
      points: DataTypes.INTEGER,
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  clubstanding.associate = function (models) {
    // associations can be defined here
  };
  return clubstanding;
};
