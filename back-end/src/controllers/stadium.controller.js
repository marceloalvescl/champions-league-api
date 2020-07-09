const StadiumService = require('../services/stadium.service');

async function getAllStadiums(request, response) {
  return response.json(await StadiumService.getAllStadiums());
}

async function getStadiumById(request, response) {
  const { id } = request.params;

  return response.json(await StadiumService.getStadiumById(id));
}

async function getStadiumByName(request, response) {
  const { name } = request.params;

  return response.json(await StadiumService.getStadiumByName(name));
}

async function getStadiumByCountry(request, response) {
  const { country } = request.params;

  return response.json(await StadiumService.getStadiumByCountry(country));
}

module.exports = {
  getAllStadiums,
  getStadiumById,
  getStadiumByName,
  getStadiumByCountry
};
