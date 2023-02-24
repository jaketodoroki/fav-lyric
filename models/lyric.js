'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lyric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lyric.belongsTo(models.Profile, {foreignKey: 'profileId'})
    }
  }
  Lyric.init({
    lyric: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: DataTypes.STRING,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    },

  }, {
    sequelize,
    modelName: 'Lyric',
  });
  return Lyric;
};