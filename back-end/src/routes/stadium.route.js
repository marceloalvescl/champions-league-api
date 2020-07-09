const { Router } = require('express');

const StadiumController = require('../controllers/stadium.controller');

const router = Router();

router.get('/', StadiumController.getAllStadiums);
router.get('/id/:id', StadiumController.getStadiumById);
router.get('/name/:name', StadiumController.getStadiumByName);
router.get('/country/:country', StadiumController.getStadiumByCountry);

module.exports = router;
