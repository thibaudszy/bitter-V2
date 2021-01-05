"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsTo(models.user, { foreignKey: "authorId", as: "author" });
      recipe.belongsToMany(models.user, {
        through: "libraries",
        foreignKey: "recipeId",
        as: "recipeInLibrary",
      });
      recipe.hasMany(models.maltAddition);
      recipe.hasMany(models.boilHopAddition);
      recipe.hasMany(models.mashStep);
      recipe.hasMany(models.brew);
    }
  }
  recipe.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      authorId: { type: DataTypes.INTEGER, allowNull: false },
      imageURL: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT },
      typeOfRecipe: {
        type: DataTypes.ENUM(
          "Extract",
          "All grain - single mash",
          "All grain - step mash",
          "All grain - decoction mash"
        ),
      },
      complexity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      style: { type: DataTypes.STRING },
      ABV: { type: DataTypes.FLOAT, allowNull: false },
      IBU: { type: DataTypes.INTEGER, allowNull: false },
      OGinPlato: { type: DataTypes.FLOAT },
      FGinPlato: { type: DataTypes.FLOAT, allowNull: false },
      DesiredCarbonationInGramsPerLiter: { type: DataTypes.FLOAT },
      colorInEBC: { type: DataTypes.INTEGER },
      LiquorToGristRatio: { type: DataTypes.FLOAT, allowNull: false },
      yeastStrain: { type: DataTypes.STRING, allowNull: false },
      PitchRateInGramsperLiter: { type: DataTypes.FLOAT },
      BoilDurationInMin: { type: DataTypes.INTEGER, allowNull: false },
      comments: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
