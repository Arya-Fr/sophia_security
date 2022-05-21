import { db } from '../config/db.js';
import { Router } from "express";
var router = Router();
import { doc, getDocs, getDoc, addDoc, collection } from "firebase/firestore";

router.get('/:id', async (req, res) => {
    getDoc(doc(db, "post", req.params.id)).then(function (doc) {
        getDocs(collection(db, "post",req.params.id,"response")).then(function (docs) {
            const post = [];
            docs.forEach((dos) => {
                post.push(dos.data())
            });
            post.sort(function (a, b) {
                return b.score - a.score;
            })
            res.render("../views/post.ejs", { post: doc.data(), account: req.session.log, response: post });

        });
    });
})

router.post('/:id', async (req, res) => {
    addDoc(collection(db, "post", req.params.id, "response"), {
        contenu: req.body.contenu,
        score: 0,
        name: req.session.name,
    });
    getDoc(doc(db, "post", req.params.id)).then(function (doc) {
        getDocs(collection(db, "post",req.params.id,"response")).then(function (docs) {
            const post = [];
            docs.forEach((dos) => {
                post.push(dos.data())
            });
            post.sort(function (a, b) {
                return b.score - a.score;
            })
            res.render("../views/post.ejs", { post: doc.data(), account: req.session.log, response: post });

        });
    });
})

export default router;