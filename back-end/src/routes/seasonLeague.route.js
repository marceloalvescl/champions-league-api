const { Router } = require('express');

const SeasonLeagueController = require('../controllers/seasonLeague.controller');

const router = Router();

router.get('/search/', SeasonLeagueController.getAllSeasonLeagues);
router.get('/search/id/:id', SeasonLeagueController.getSeasonLeagueById);
router.get(
  '/search/champion/:name',
  SeasonLeagueController.getSeasonLeagueByChampionName
);
module.exports = router;
