"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "maltAdditions",
      [
        {
          recipeId: 1,
          type: "Vienna malt",
          maltId: 1,
          percentageOfExtract: 80,
          defaultExtract: 70,
          defaultMoistureInPercentage: 5,
          defaultQuantityInGramsPerLiter: 5,
          defaultColorInEBC: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          type: "Munich malt",
          maltId: 2,
          percentageOfExtract: 15,
          defaultExtract: 80,
          defaultMoistureInPercentage: 4,
          defaultQuantityInGramsPerLiter: 4,
          defaultColorInEBC: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          type: "Cara50",
          maltId: 3,
          percentageOfExtract: 7.5,
          defaultExtract: 71,
          defaultMoistureInPercentage: 5,
          defaultQuantityInGramsPerLiter: 3,
          defaultColorInEBC: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          type: "Vienna malt ",
          maltId: 1,
          percentageOfExtract: 95,
          defaultExtract: 70,
          defaultMoistureInPercentage: 5,
          defaultQuantityInGramsPerLiter: 2,
          defaultColorInEBC: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          type: "Carafa 2",
          maltId: 4,
          percentageOfExtract: 5,
          defaultExtract: 65,
          defaultMoistureInPercentage: 3.8,
          defaultQuantityInGramsPerLiter: 0.5,
          defaultColorInEBC: 1150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("maltAdditions", null, {});
  },
};
