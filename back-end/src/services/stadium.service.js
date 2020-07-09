const Stadium = require('../models/Stadium');

async function getAllStadiums() {
  return Stadium.findAll();
}

async function getStadiumById(id) {
  return Stadium.findByPk(id);
}

async function getStadiumByName(name) {
  return Stadium.findAll({
    where: {
      stadiumName: name
    }
  });
}

async function getStadiumByCountry(country) {
  return Stadium.findAll({
    where: {
      stadiumCountry: country
    }
  });
}

module.exports = {
  getAllStadiums,
  getStadiumById,
  getStadiumByName,
  getStadiumByCountry
};
