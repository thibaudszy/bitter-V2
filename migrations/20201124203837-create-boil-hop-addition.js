"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("boilHopAdditions", {
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alphaAcidContent: {
        type: Sequelize.FLOAT,
      },
      percentageAlphaAcidsFromAddition: {
        type: Sequelize.FLOAT,
      },
      timeOfAdditionInMinBeforeEndOfBoil: Sequelize.INTEGER,
      defaultQuantityInGramsPerLiter: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      // dryHopTimingInPercentageAF: Sequelize.INTEGER,
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // dryHopRateInGramsPerLitre: { type: Sequelize.FLOAT },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("boilHopAdditions");
  },
};
