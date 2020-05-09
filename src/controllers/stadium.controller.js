const StadiumService = require('../services/stadium.service');

async function getAllStadiums(request, response) {
  return response.json(await StadiumService.getAllStadiums());
}

async function getStadiumById(request, response) {
  const { id } = request.params;

  return response.json(await StadiumService.getStadiumById(id));
}

module.exports = {
  getAllStadiums,
  getStadiumById
};
