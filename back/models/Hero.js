'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.hasMany(models.HeroImage, {
        foreignKey: 'heroId'
      });
      Hero.belongsToMany(models.Superpower, {
        through: 'heroes_to_superpowers',
        foreignKey: 'heroId'
      })
    }
  }
  Hero.init({
    nickname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    realName: {
      field: 'real_name',
      type: DataTypes.STRING
    },
    originDescription: {
      field: 'origin_description',
      type: DataTypes.TEXT
    },
    catch_phrase: {
      field: 'catch_phrase',
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true
  });
  return Hero;
};