import { db } from '../config/db.js';
import { Router } from "express";
import auth from "../middleware/auth.js";
import { addDoc,collection } from "firebase/firestore";

var router = Router();

router.get('/' ,auth, async (req , res) => {
    res.render("../views/new_post.ejs");
})

router.post('/', async(req, res) => {
    addDoc(collection(db, "post"), {
        title: req.body.title,
        contenu: req.body.contenu,
        score: 0,
        name: req.session.name,
        owner: req.session.uid,
      });
      res.redirect("/forum");
})

export default router;