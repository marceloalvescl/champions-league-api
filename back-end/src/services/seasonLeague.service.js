const SeasonLeague = require('../models/SeasonLeague');

async function getAllSeasonLeagues() {
  return SeasonLeague.findAll();
}

async function getSeasonLeagueById(id) {
  return SeasonLeague.findByPk(id);
}

async function getAllSeasonLeaguesByWinnerTeam(id) {
  return SeasonLeague.findAll({
    where: {
      leagueWinner: id
    }
  });
}

module.exports = {
  getAllSeasonLeagues,
  getSeasonLeagueById,
  getAllSeasonLeaguesByWinnerTeam
};
