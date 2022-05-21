import { db } from '../config/db.js';
import { Router } from "express";
var router = Router();
import { doc, getDoc } from "firebase/firestore";

router.get('/:id' , async (req , res) => {
    getDoc(doc(db, "post", req.params.id)).then(function(doc) {
        res.render("../views/post.ejs",{post: doc.data(),account:req.session.log});
    });
})

export default router;