"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "dryHopAdditions",
      [
        {
          recipeId: 1,
          variety: "Citra",
          hopId: 2,
          dryHopRateInGramsPerLitre: 5,
          timing: 80,
          timingUnit: "AF",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("dryHopAdditions", null, {});
  },
};
