const dataMapper = require('../../data/dataMapper');


const mainController = {
    homePage(req, res) {
      res.render('home');
    },


      cataloguePage: async function(req, res) {
 try {
        const cafes = await dataMapper.getAllCoffee();
      
        res.render('catalogue', {
          cafes: cafes,
        
        });
  
      } catch (error) {
        console.error(error);
        response.status(500).render('error');
      }
     
    },
 
    articlePage(req, res) {
      res.render('article');
     
         },


        };
  
  // On exporte l'objet `mainController` qui contient les méthodes de rendu de mes views
  // On exporte le contenu de l'objet, pas le nom de la variable
  module.exports = mainController;