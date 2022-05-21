import express from "express";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import sessions from 'express-session';
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(sessions({secret: "54cr4t",resave: false ,saveUninitialized: true,}));

app.set("view engine", "ejs");

import mainRouter from "./routes/main.js";
import forumMainRouteur from "./routes/forumMain.js";
import ipadress from "./routes/ipadress.js";
import login from "./routes/login.js";
import register from "./routes/register.js";
import logout from "./routes/logout.js";
import update from "./routes/update.js";
import new_post from "./routes/new_post.js";
import post from "./routes/post.js";

app.use(express.static('./public'));

app.use("/", mainRouter);
app.use("/forum", forumMainRouteur);
app.use('/ip', ipadress);
app.use("/login", login);
app.use("/register", register);
app.use("/logout", logout);
app.use("/update", update);
app.use("/new_post", new_post);
app.use("/post/",post);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`)
})