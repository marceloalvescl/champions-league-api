const { Router } = require('express');

const WinnerTeamController = require('../controllers/winnerTeam.controller');

const router = Router();

router.get('/', WinnerTeamController.getAllWinnerTeams);
router.get('/:id', WinnerTeamController.getAllWinnerTeams);
router.get('/:id/champions', WinnerTeamController.getChampionsByWinnerTeam);
router.get('/name/:name', WinnerTeamController.getWinnerTeamByName);

module.exports = router;
