// mes viarables d environnement
const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const router = require('./app/router');


const app = express();


app.set('view engine', 'ejs');
// acces à mes views
app.set('views', 'app/views');

// J'ajoute un middleware pour dire à express de servir les fichiers statiques
// qui se trouvent dans le dossier public
app.use(express.static('public'));

// Utilisation du router
app.use(router);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
