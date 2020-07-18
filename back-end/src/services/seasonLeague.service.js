const SeasonLeague = require('../models/SeasonLeague');
const sequelize = require('../database/sequelize');
const { Sequelize } = require('sequelize');
const WinnerTeam = require('../models/WinnerTeam');

async function getAllSeasonLeagues() {
  return sequelize.query(
    `SELECT 
      id_season, 
      season_year, 
      stadium_name,
      final_date, 
      final_match, 
      team_name 
    FROM tb_season_league 
    INNER JOIN tb_team 
    ON fk_team_winner = id_team
    INNER JOIN tb_stadium
    ON final_stadium = id_stadium
    ORDER BY id_season;`,
    { type: Sequelize.QueryTypes.SELECT }
  );
}

async function getSeasonLeagueById(id) {
  return sequelize.query(
    `SELECT 
      id_season, 
      season_year, 
      stadium_name,
      final_date, 
      final_match, 
      team_name 
    FROM tb_season_league 
    INNER JOIN tb_team 
    ON fk_team_winner = id_team
    INNER JOIN tb_stadium
    ON final_stadium = id_stadium
    WHERE id_season = ${id}
    ORDER BY id_season;`,
    { type: Sequelize.QueryTypes.SELECT }
  );
}

async function getAllSeasonLeaguesByWinnerTeam(id) {
  return SeasonLeague.findAll({
    where: {
      leagueWinner: id
    }
  });
}

async function getSeasonLeagueByChampionName(name) {
  return sequelize.query(
    `SELECT 
      id_season, 
      season_year, 
      stadium_name,
      final_date, 
      final_match, 
      team_name 
    FROM tb_season_league 
    INNER JOIN tb_team 
    ON fk_team_winner = id_team
    INNER JOIN tb_stadium
    ON final_stadium = id_stadium
    WHERE team_name = '${name}'
    ORDER BY id_season;`,
    { type: Sequelize.QueryTypes.SELECT }
  );
}

module.exports = {
  getAllSeasonLeagues,
  getSeasonLeagueById,
  getAllSeasonLeaguesByWinnerTeam,
  getSeasonLeagueByChampionName
};
