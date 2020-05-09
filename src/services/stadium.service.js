const Stadium = require('../models/Stadium');

async function getAllStadiums() {
  return Stadium.findAll();
}

async function getStadiumById(id) {
  return Stadium.findByPk(id);
}

module.exports = { getAllStadiums, getStadiumById };
