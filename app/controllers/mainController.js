const mainController = {
    homePage(req, res) {
      res.render('home');
    },

    cataloguePage(req, res) {
 res.render('catalogue');

    },

    articlePage(req, res) {
      res.render('article');
     
         },


  };
  
  // On exporte l'objet `mainController` qui contient les méthodes de rendu de mes views
  // On exporte le contenu de l'objet, pas le nom de la variable
  module.exports = mainController;