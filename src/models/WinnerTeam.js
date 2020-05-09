const connection = require('../database/sequelize');
const { Model, DataTypes, Sequelize } = require('sequelize');

class WinnerTeam extends Model {}

WinnerTeam.init(
  {
    idTeam: { type: DataTypes.INTEGER, primaryKey: true },
    teamName: { type: DataTypes.STRING, allowNull: false },
    teamCountry: { type: DataTypes.STRING, allowNull: false },
    teamFoundationDate: { type: DataTypes.DATEONLY, allowNull: false }
  },
  {
    sequelize: connection,
    modelName: 'WinnerTeam',
    tableName: 'winner_team',
    timestamps: false,
    underscored: true
  }
);

module.exports = WinnerTeam;
