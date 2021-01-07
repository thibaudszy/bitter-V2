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
      hopId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "hops",
          key: "id",
        },
      },
      variety: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      timing: { type: Sequelize.FLOAT },
      timingUnit: { type: Sequelize.ENUM("hours", "AF") },
      dryHopRateInGramsPerLitre: { type: Sequelize.FLOAT },
      updatedAt: {
        allowNull: false,
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("dryHopAdditions");
  },
};
