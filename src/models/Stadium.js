const connection = require('../database/sequelize');
const { Sequelize, Model, DataTypes } = require('sequelize');

class Stadium extends Model {}

Stadium.init(
  {
    idStadium: { type: DataTypes.INTEGER, primaryKey: true },
    stadiumName: { type: DataTypes.STRING, allowNull: false },
    stadiumCountry: { type: DataTypes.STRING, allowNull: false },
    finalCount: { type: DataTypes.INTEGER, allowNull: false }
  },
  {
    sequelize: connection,
    modelName: 'Stadium',
    tableName: 'stadiums',
    timestamps: false,
    underscored: true
  }
);

module.exports = Stadium;
