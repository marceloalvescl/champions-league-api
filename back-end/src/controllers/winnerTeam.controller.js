const WinnerTeamService = require('../services/winnerTeam.service');

async function getAllWinnerTeams(request, response) {
  return response.json(await WinnerTeamService.getAllWinnerTeams());
}

async function getWinnerTeamById(request, response) {
  const { id } = request.params;
  return response.json(await WinnerTeamService.getWinnerTeamById(id));
}

async function getWinnerTeamByName(request, response) {
  const { name } = request.params;
  return response.json(await WinnerTeamService.getWinnerTeamByName(name));
}

async function getChampionsByWinnerTeam(request, response) {
  const { id } = request.params;

  const team = await WinnerTeamService.getWinnerTeamById(id);
  const champions = await WinnerTeamService.getChampionsByWinnerTeam(id);
  const championsCount = champions.length;

  return response.json({
    teamName: team.teamName,
    championsCount,
    champions
  });
}

module.exports = {
  getAllWinnerTeams,
  getWinnerTeamById,
  getWinnerTeamByName,
  getChampionsByWinnerTeam
};
