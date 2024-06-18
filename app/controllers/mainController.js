const dataMapper = require('../../data/dataMapper');


const mainController = {
 // méthode pour la page d'accueil
 async homePage(req, res) {
  try {
    const cafes = await dataMapper.get3Coffee();
    // je passe les cafés à ma vue
    res.render('home', { cafes });
  } catch (error) {
    console.error(error);
    res.status(500).send('ERREUR PAS DE CAFE');
  }
},
 
   
      async articlePage(req, res) {
        try {
          const coffeeId = req.params.id; 
    
          const cafe = await dataMapper.getArticle(coffeeId);
          if (!cafe) {
            // Si la figurine n'est pas trouvée, renvoyer une erreur 404
            return res.status(404).send('error');
          }
          res.render('article', { cafe });
        } catch (error) {
          console.error(error);
          res.status(500).send('error');
        }
      },

      async cataloguePage(req, res) {
        try {
          const cafes = await dataMapper.getAllCoffee();
          // je passe les cafés à ma vue
          res.render('catalogue', { cafes });
        } catch (error) {
          console.error(error);
          res.status(500).send('ERREUR PAS DE CAFE');
        }
      },

      introductionPage(req, res) {
       
          // je passe les cafés à ma vue
          res.render('introduction');
        
        
                 }
      };
       
  

  
  // On exporte l'objet `mainController` qui contient les méthodes de rendu de mes views
  // On exporte le contenu de l'objet, pas le nom de la variable
  module.exports = mainController;