"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "hops",
      [
        {
          variety: "Chinook",
          alphaAcidContentRangeMin: 10,
          alphaAcidContentRangeMax: 14,
          defaultAlphaAcidContent: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          variety: "Citra",
          alphaAcidContentRangeMin: 11,
          alphaAcidContentRangeMax: 14,
          defaultAlphaAcidContent: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          variety: "Magnum",
          alphaAcidContentRangeMin: 10,
          alphaAcidContentRangeMax: 14,
          defaultAlphaAcidContent: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hops", null, {});
  },
};
