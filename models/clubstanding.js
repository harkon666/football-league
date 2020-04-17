'use strict';
module.exports = (sequelize, DataTypes) => {
  const clubstanding = sequelize.define('clubstanding', {
    clubname: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {});
  clubstanding.associate = function(models) {
    // associations can be defined here
  };
  return clubstanding;
};