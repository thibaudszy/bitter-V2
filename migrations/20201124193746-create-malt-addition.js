"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("maltAdditions", {
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
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      percentageOfExtract: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      defaultExtract: {
        type: Sequelize.FLOAT,
      },
      defaultMoistureInPercentage: {
        type: Sequelize.FLOAT,
      },
      defaultColorInEBC: {
        type: Sequelize.INTEGER,
      },
      defaultQuantityInGramsPerLiter: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("maltAdditions");
  },
};
