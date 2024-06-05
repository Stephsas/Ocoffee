const { Router } = require('express');

const mainController = require('./controllers/mainController');



const router = Router();

// Ses routes appeleront les fonctions de nos controllers
router.get('/', mainController.homePage);
router.get('/catalogue', mainController.cataloguePage);
router.get('/article/:id', mainController.articlePage);

// une route pour afficher la page erreur

router.use((req, res) => {
    res.status(404).render('error');
  });

module.exports = router;