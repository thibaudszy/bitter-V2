"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class malt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      malt.hasMany(models.maltAddition);
    }
  }
  malt.init(
    {
      type: DataTypes.STRING,
      extractRangeMin: DataTypes.FLOAT,
      extractRangeMax: DataTypes.FLOAT,
      defaultExtract: DataTypes.FLOAT,
      colorInEBCRangeMin: DataTypes.FLOAT,
      colorInEBCRangeMax: DataTypes.FLOAT,
      defaultColorInEBC: DataTypes.FLOAT,
      defaultMoistureInPercentage: DataTypes.FLOAT,
      isBaseMalt: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "malt",
    }
  );
  return malt;
};
