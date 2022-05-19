var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();


var mainRouter = require("./routes/main.js");
var forumMainRouteur = require("./routes/forumMain.js");
var ipadress = require("./routes/ipadress");

app.use(cookieParser());
app.use(session({secret: "s4cr4t"}));

app.use(express.static('./public'));

app.use("/", mainRouter);
app.use("/forum", forumMainRouteur);
app.use('/ip', ipadress);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`)
})