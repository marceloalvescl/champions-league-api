const WinnerTeam = require('../models/WinnerTeam');

const seasonLeagueService = require('./seasonLeague.service');

async function getAllWinnerTeams() {
  return WinnerTeam.findAll();
}

async function getWinnerTeamById(id) {
  return WinnerTeam.findByPk(id);
}

async function getWinnerTeamByName(name) {
  return WinnerTeam.findAll({
    where: {
      teamName: name
    }
  });
}

async function getChampionsByWinnerTeam(id) {
  return await seasonLeagueService.getAllSeasonLeaguesByWinnerTeam(id);
}

module.exports = {
  getAllWinnerTeams,
  getWinnerTeamById,
  getWinnerTeamByName,
  getChampionsByWinnerTeam
};
