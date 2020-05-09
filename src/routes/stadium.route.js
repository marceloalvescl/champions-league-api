const { Router } = require('express');

const StadiumController = require('../controllers/stadium.controller');

const router = Router();

router.get('/', StadiumController.getAllStadiums);
router.get('/:id', StadiumController.getStadiumById);

module.exports = router;
