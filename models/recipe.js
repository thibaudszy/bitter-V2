"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Datatype) => {
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
      recipe.hasMany(models.hopAddition);
      recipe.hasMany(models.mashStep);
      recipe.hasMany(models.brew);
    }
  }
  recipe.init(
    {
      name: { type: Datatype.STRING, allowNull: false },
      authorId: { type: Datatype.INTEGER, allowNull: false },
      imageURL: { type: Datatype.STRING },
      description: { type: Datatype.TEXT },
      typeOfRecipe: {
        type: DataTypes.ENUM(
          "Extract",
          "All grain - single mash",
          "All grain - step mash",
          "All grain - decoction mash"
        ),
      },
      complexity: {
        type: DataTypes.ENUM(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
        allowNull: false,
      },
      style: { type: Datatype.STRING },
      ABV: { type: Datatype.FLOAT, allowNull: false },
      IBU: { type: Datatype.INTEGER, allowNull: false },
      OGinPlato: { type: Datatype.FLOAT },
      FGinPlato: { type: Datatype.FLOAT, allowNull: false },
      DesiredCarbonationInGramsPerLiter: { type: Datatype.FLOAT },
      colorInEBC: { type: Datatype.INTEGER },
      LiquorToGristRatio: { type: Datatype.FLOAT, allowNull: false },
      yeastStrain: { type: Datatype.STRING, allowNull: false },
      PitchRateInGramsperLiter: { type: Datatype.FLOAT },
      BoilDurationInMin: { type: Datatype.INTEGER, allowNull: false },
      comments: { type: Datatype.TEXT },
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
