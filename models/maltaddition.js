"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class maltAddition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      maltAddition.belongsTo(models.recipe);
      maltAddition.belongsTo(models.malt);
    }
  }
  maltAddition.init(
    {
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      percentageOfExtract: { type: DataTypes.FLOAT, allowNull: false },
      defaultExtract: DataTypes.FLOAT,
      defaultMoistureInPercentage: DataTypes.FLOAT,
      defaultColorInEBC: DataTypes.INTEGER,
      defaultQuantityInGramsPerLiter: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "maltAddition",
    }
  );
  return maltAddition;
};
