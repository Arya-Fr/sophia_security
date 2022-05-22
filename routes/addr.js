import { db } from '../config/db.js';
import { Router } from "express";
import auth from "../middleware/auth.js";
import { getDoc, setDoc, updateDoc, doc, increment, deleteDoc } from "firebase/firestore";

var router = Router();

router.get('/:id/:resid/:type', auth, async (req, res) => {
    getDoc(doc(db, "User", req.session.uid, "vote", req.params.id,"reponse",req.params.resid)).then(function (docs) {
        var data = docs.data();
        var add;
        if (req.params.type == "up") {
            add = 1;
        } else if (req.params.type == "down") {
            add = -1;
        }
        if (data == undefined) {
            setDoc(doc(db, "User", req.session.uid, "vote", req.params.id,"reponse",req.params.resid), {
                type: req.params.type,
            });
            updateDoc(doc(db, "post", req.params.id,"response",req.params.resid), {
                score: increment(add)
            })
        } else {
            if (data.type == 'up') {
                if (req.params.type == 'up') {
                    deleteDoc(doc(db, "User", req.session.uid, "vote", req.params.id,"reponse",req.params.resid));
                    updateDoc(doc(db, "post", req.params.id,"response",req.params.resid), {
                        score: increment(-1)
                    })
                } else if (req.params.type == 'down') {
                    setDoc(doc(db, "User", req.session.uid, "vote", req.params.id,"reponse",req.params.resid), {
                        type: req.params.type,
                    });
                    updateDoc(doc(db, "post", req.params.id,"response",req.params.resid), {
                        score: increment(-2)
                    })
                }
            } else if (data.type == 'down') {
                if (req.params.type == 'up') {
                    setDoc(doc(db, "User", req.session.uid, "vote", req.params.id,"reponse",req.params.resid), {
                        type: req.params.type,
                    });
                    updateDoc(doc(db, "post", req.params.id,"response",req.params.resid), {
                        score: increment(2)
                    })
                } else if (req.params.type == 'down') {
                    deleteDoc(doc(db, "User", req.session.uid, "vote", req.params.id,"reponse",req.params.resid));
                    updateDoc(doc(db, "post", req.params.id,"response",req.params.resid), {
                        score: increment(1)
                    })
                }
            }
        }
        res.redirect("/post/" + req.params.id);
    })
})

export default router;