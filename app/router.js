const { Router } = require('express');

const mainController = require('./controllers/mainController');



const router = Router();

// Ses routes appeleront les fonctions de nos controllers
router.get('/', mainController.homepage);

module.exports = router;