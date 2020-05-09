const SeasonLeagueService = require('../services/seasonLeague.service');

async function getAllSeasonLeagues(request, response) {
  return response.json(await SeasonLeagueService.getAllSeasonLeagues());
}

async function getSeasonLeagueById(request, response) {
  const { id } = request.params;
  return response.json(await SeasonLeagueService.getSeasonLeagueById(id));
}

module.exports = {
  getAllSeasonLeagues,
  getSeasonLeagueById
};
