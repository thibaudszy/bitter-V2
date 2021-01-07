"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "boilHopAdditions",
      [
        {
          recipeId: 1,
          variety: "Chinook",
          hopId: 1,
          alphaAcidContent: 12,
          percentageAlphaAcidsFromAddition: 60,
          timeOfAdditionInMinBeforeEndOfBoil: 60,
          defaultQuantityInGramsPerLiter: 5.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          variety: "Citra",
          hopId: 2,
          alphaAcidContent: 13,
          percentageAlphaAcidsFromAddition: 40,
          timeOfAdditionInMinBeforeEndOfBoil: 10,
          defaultQuantityInGramsPerLiter: 4.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   recipeId: 1,
        //   variety: "Citra",
        //   alphaAcidContent: 13,
        //   percentageAlphaAcidsFromAddition: null,
        //   timeOfAdditionInMinBeforeEndOfBoil: null,
        //   isDryHop: true,
        //   dryHopTimingInPercentageAF: 80,
        //   dryHopRateInGramsPerLitre: 5,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },

        {
          recipeId: 2,
          variety: "Magnum",
          hopId: 3,
          alphaAcidContent: 13,
          percentageAlphaAcidsFromAddition: 100,
          timeOfAdditionInMinBeforeEndOfBoil: 50,
          defaultQuantityInGramsPerLiter: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("boilHopAdditions", null, {});
  },
};
