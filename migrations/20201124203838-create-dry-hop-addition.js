"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("dryHopAdditions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "recipes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      variety: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      dryHopTimingInPercentageAF: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.FLOAT,
      },
      dryHopTimingInHoursAfterStartOfFementation: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.INTEGER,
      },
      dryHopRateInGramsPerLitre: { type: Sequelize.FLOAT },
      updatedAt: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("dryHopAdditions");
  },
};
