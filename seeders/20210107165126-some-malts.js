"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "malts",
      [
        {
          type: "Vienna",
          extractRangeMin: 78,
          extractRangeMax: 81,
          defaultExtract: 80,
          colorInEBCRangeMin: 5,
          colorInEBCRangeMax: 7,
          defaultMoistureInPercentage: 5,
          defaultColorInEBC: 6,
          isBaseMalt: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Munich",
          extractRangeMin: 76,
          extractRangeMax: 80,
          defaultExtract: 79,
          colorInEBCRangeMin: 13,
          colorInEBCRangeMax: 17,
          defaultColorInEBC: 15,
          defaultMoistureInPercentage: 4,
          isBaseMalt: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Cara50",
          extractRangeMin: 69,
          extractRangeMax: 72,
          defaultExtract: 71,
          colorInEBCRangeMin: 45,
          colorInEBCRangeMax: 55,
          defaultColorInEBC: 50,
          defaultMoistureInPercentage: 6,
          isBaseMalt: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Carafa 2",
          extractRangeMin: 60,
          extractRangeMax: 70,
          defaultExtract: 65,
          colorInEBCRangeMin: 900,
          colorInEBCRangeMax: 1300,
          defaultColorInEBC: 1150,
          defaultMoistureInPercentage: 3.8,
          isBaseMalt: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("malts", null, {});
  },
};
