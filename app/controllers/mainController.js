const mainController = {
    homepage(req, res) {
      res.render('index');
    },
  };
  
  // On exporte l'objet `mainController` qui contient une méthode `homepage`
  // On exporte le contenu de l'objet, pas le nom de la variable
  module.exports = mainController;