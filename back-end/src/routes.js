/**
 * Imports
 */
const { Router } = require('express');

/**
 * Rotas da aplicação.
 */
const StadiumRoute = require('./routes/stadium.route');
const WinnerTeamRoute = require('./routes/winnerTeam.route');
const SeasonLeagueRoute = require('./routes/seasonLeague.route');

const router = Router();

/**
 * Rotas disponíveis.
 */
router.use('/stadiums', StadiumRoute);
router.use('/winnerTeams', WinnerTeamRoute);
router.use('/seasonLeagues', SeasonLeagueRoute);

/**
 * Exporta rotas da aplicação.
 */
module.exports = router;
