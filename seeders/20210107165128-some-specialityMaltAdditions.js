"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "specialityMaltAdditions",
      [
        {
          recipeId: 2,
          type: "Carafa 2",
          maltId: 4,
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
    await queryInterface.bulkDelete("specialityMaltAdditions", null, {});
  },
};
