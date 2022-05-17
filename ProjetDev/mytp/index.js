'use strict'
const { response } = require('express');
/* eslint-env node , es6 */

// Importe le paquet express
const express = require('express')

// Créé une application express
const app = express()

//On Importe la logique de la page d'acceuil
const genererPageAccueil = require('./pages/index-get')

//On Importe la logique de l'IP Adress
const {getIpAdress} = require('./pages/ip-adress');

//On cree notre route pour l'IP
app.get('/ip-adress' , async (req , res) => {
    const ip = await getIpAdress(req);
    res.send(`Voici votre Ip: ${ip}`);
})



// Crée une route "/" correspondant à la racine du site.
app.get('/', async(req, res) => {
  // Fonction éxecutée lorsque une requête de type GET / est reçue.
  const indexHtml = await genererPageAccueil()
  
  
  res.send(indexHtml)
})

app.use('/src' , express.static('C:/Users/zkt/Desktop/ProjetDev/src/'))


// Démarrer le serveur et écouter un port donné
const PORT = 3000

app.listen(PORT, () => {
  // Fonction éxecutée lorsque l'application a démarré
  console.log(`Serveur démarré : http://localhost:${PORT}`)
})