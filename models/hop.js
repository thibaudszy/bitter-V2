"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      hop.hasMany(models.boilHopAdditions);
      hop.hasMany(models.dryHopAdditions);
    }
  }
  hop.init(
    {
      variety: DataTypes.STRING,
      alphaAcidContentRangeMin: DataTypes.FLOAT,
      alphaAcidContentRangeMax: DataTypes.FLOAT,
      defaultAlphaAcidContent: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "hop",
    }
  );
  return hop;
};
