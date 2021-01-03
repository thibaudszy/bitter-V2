"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fermentationStep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      fermentationStep.belongsTo(models.recipe);
    }
  }
  fermentationStep.init(
    {
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
      stepNo: { type: DataTypes.INTEGER, allowNull: false },
      temperature: { type: DataTypes.FLOAT, allowNull: false },
      timing: { type: DataTypes.FLOAT },
      timingUnit: { type: DataTypes.ENUM("hours", "AF") },
    },
    {
      sequelize,
      modelName: "fermentationStep",
    }
  );
  return fermentationStep;
};
