const connection = require('../database/sequelize');
const { Model, DataTypes, Sequelize } = require('sequelize');
const SeasonLeague = require('./SeasonLeague');

class WinnerTeam extends Model {}

WinnerTeam.init(
  {
    idTeam: { type: DataTypes.INTEGER, primaryKey: true },
    teamName: { type: DataTypes.STRING, allowNull: false },
    teamCountry: { type: DataTypes.STRING, allowNull: false },
    teamFoundationDate: { type: DataTypes.DATEONLY, allowNull: false },
    teamWinner: { type: DataTypes.INTEGER, allowNull: true }
  },
  {
    sequelize: connection,
    modelName: 'WinnerTeam',
    tableName: 'tb_team',
    timestamps: false,
    underscored: true
  }
);

module.exports = WinnerTeam;
