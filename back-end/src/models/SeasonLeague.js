/**
 * Columns
 *      id_season
 *      league_season
 *      final_stadium
 *      final_date
 *      final_match
 *      league_winner
 *
 * */

const connection = require('../database/sequelize');
const WinnerTeam = require('./WinnerTeam');
const { Sequelize, Model, DataTypes } = require('sequelize');

class SeasonLeague extends Model {}

SeasonLeague.init(
  {
    idSeason: { type: DataTypes.INTEGER, primaryKey: true },
    seasonYear: { type: DataTypes.STRING, allowNull: false },
    finalStadium: { type: DataTypes.STRING, allowNull: false },
    finalDate: { type: DataTypes.DATEONLY, allowNull: false },
    finalMatch: { type: DataTypes.STRING, allowNull: false },
    fkTeamWinner: {
      type: DataTypes.INTEGER,
      references: {
        model: WinnerTeam,
        key: 'idTeam'
      }
    }
  },
  {
    sequelize: connection,
    modelName: 'SeasonLeague',
    tableName: 'tb_season_league',
    timestamps: false,
    underscored: true
  }
);

module.exports = SeasonLeague;
