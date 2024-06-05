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
 
    async articlePage (req, res) {
      const coffeeId = parseInt(request.params.id, 10)
  
      try {
        const coffee = await dataMapper.getArticle(coffeeId);
    
        if (coffee) { //équivalent à if (coffee !== undefined)
          //le paramètre card contient bien des infos, on les passe à la vue pour affichage
          res.render('article', {coffee});
      } else {
          //pas d'erreur SQL mais on n'a récupéré aucun enregistrement, on le signale au navigateur
          res.status(404).send(`Coffee with id ${coffeeId} not found`);
      }
      } catch (error) {
        console.error(error);
        response.status(500).render('error');
      }
    
  }
  
  };
  
  // On exporte l'objet `mainController` qui contient les méthodes de rendu de mes views
  // On exporte le contenu de l'objet, pas le nom de la variable
  module.exports = mainController;