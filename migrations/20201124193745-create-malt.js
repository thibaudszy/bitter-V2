"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("malts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      extractRangeMin: {
        type: Sequelize.FLOAT,
      },
      extractRangeMax: {
        type: Sequelize.FLOAT,
      },
      defaultExtract: {
        type: Sequelize.FLOAT,
      },
      colorInEBCRangeMin: {
        type: Sequelize.FLOAT,
      },
      colorInEBCRangeMax: {
        type: Sequelize.FLOAT,
      },
      defaultColorInEBC: {
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
    await queryInterface.dropTable("malts");
  },
};
