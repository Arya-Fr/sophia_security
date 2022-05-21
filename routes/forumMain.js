import { db } from '../config/db.js';
import { Router } from "express";
var router = Router();
import { collection, getDocs } from "firebase/firestore";

router.get('/' , async (req , res) => {
    getDocs(collection(db, "post")).then(function(docs){
        const post = [];
        docs.forEach((doc) => {
            var cont;
            cont = [doc.data(), doc.id];
            post.push(cont)
        });
        post.sort(function (a,b){
            return b[0].score - a[0].score;
        })
        res.render("../views/forum.ejs",{posts: post});
    }); 
})

export default router;