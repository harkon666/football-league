"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "clubstandings",
      [
        {
          clubname: "Arsenal",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Aston Villa",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Bournemouth",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "brighton & Hove Albion",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Burnley",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Chelsea",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Crystal Palace",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Everton",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Leicester City",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Liverpool",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Manchester City",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Manchester United",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Newcastle United",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Norwich City",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Sheffield United",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Southampton",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Tottenham Hotspur",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Watford",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "West Ham United",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clubname: "Wolverhampton Wanderers",
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
