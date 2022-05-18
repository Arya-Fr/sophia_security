const express = require('express')
const app = express()

//require("./routes/init")(app);
//const port = process.env.PORT || 3000;

//app.listen(port, () => console.log(`Listening on port ${port}...`));



const genererPageAccueil = require('./template/index-get')

//On Importe la logique de l'IP Adress
const {getIpAdress} = require('./template/ip-adress');

app.get('/', async(req, res) => {
  // Fonction éxecutée lorsque une requête de type GET / est reçue.
  const indexHtml = await genererPageAccueil()
  res.send(indexHtml)
})

//On cree notre route pour l'IP
app.get('/ip-adress' , async (req , res) => {
    const ip = await getIpAdress(req);
    res.send(`Voici votre Ip: ${ip}`);
})

const PORT = 3000

app.listen(PORT, () => {
  // Fonction éxecutée lorsque l'application a démarré
  console.log(`Serveur démarré : http://localhost:${PORT}`)
})