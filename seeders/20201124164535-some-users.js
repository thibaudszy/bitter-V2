"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Thibaud",
          lastName: "Szymczak",
          email: "thibaud@gmail.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          language: "En-GB",
          gender: "male",
          preferedUnitMass: "metric",
          preferedUnitBeerDensity: "plato",
          generalBrewingUnits: "EBC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bobby",
          lastName: "Bob",
          email: "bobby@gmail.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          language: "En-GB",
          gender: "male",
          preferedUnitMass: "imperial",
          preferedUnitBeerDensity: "plato",
          generalBrewingUnits: "UK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Emma",
          lastName: "Lupulus",
          email: "Emma@gmail.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          language: "Fr-FR",
          gender: "female",
          preferedUnitMass: "metric",
          preferedUnitBeerDensity: "plato",
          generalBrewingUnits: "UK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
