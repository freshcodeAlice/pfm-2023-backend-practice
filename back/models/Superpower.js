'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superpower.belongsToMany(models.Hero, {
        through: 'heroes_to_superpowers',
        foreignKey: 'powerId'
      })
    }
  }
  Superpower.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Superpower',
    tableName: 'superpowers',
    underscored: true
  });
  return Superpower;
};