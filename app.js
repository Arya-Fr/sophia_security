import express from "express";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import session from 'express-session';
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({secret: "s4cr4t"}));

app.set("view engine", "ejs");

import mainRouter from "./routes/main.js";
import forumMainRouteur from "./routes/forumMain.js";
import ipadress from "./routes/ipadress.js";
import login from "./routes/login.js";

app.use(express.static('./public'));

app.use("/", mainRouter);
app.use("/forum", forumMainRouteur);
app.use('/ip', ipadress);
app.use("/login", login);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`)
})