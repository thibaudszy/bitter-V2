"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class boilHopAddition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      boilHopAddition.belongsTo(models.recipe);
    }
  }
  boilHopAddition.init(
    {
      recipeId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      alphaAcidContent: DataTypes.FLOAT,
      percentageAlphaAcidsFromAddition: DataTypes.FLOAT,
      timeOfAdditionInMinBeforeEndOfBoil: { type: DataTypes.INTEGER },
      defaultQuantityInGramsPerLiter: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // dryHopTimingInPercentageAF: { type: DataTypes.INTEGER },
      // dryHopRateInGramsPerLitre: { type: DataTypes.FLOAT },
    },

    {
      sequelize,
      modelName: "boilHopAddition",
    }
  );
  return boilHopAddition;
};
