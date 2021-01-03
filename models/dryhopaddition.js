"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dryHopAddition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      dryHopAddition.belongsTo(models.recipe);
    }
  }
  dryHopAddition.init(
    {
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      dryHopTimingInPercentageAF: { type: DataTypes.INTEGER },
      timing: { type: DataTypes.FLOAT },
      timingUnit: { type: DataTypes.ENUM("hours", "AF") },
    },

    {
      sequelize,
      modelName: "dryHopAddition",
    }
  );
  return dryHopAddition;
};
