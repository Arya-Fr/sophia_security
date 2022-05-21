import { auth, signInWithEmailAndPassword, db } from '../config/db.js';
import { Router } from "express";
var router = Router();
import {  doc, getDoc } from "firebase/firestore";
import csrf from 'csurf';
//var csrfProtection = csrf({ cookie: true })

router.post('/', async (req, res) => {
    var user_mail = req.body.mail;
    var password = req.body.password;

    var session = req.session;

    signInWithEmailAndPassword(auth, user_mail, password)
        .then((userCredential) => {
            session.usermail = userCredential.user.email;
            session.token = userCredential.user.accessToken;
            req.session.log = true;
            req.session.uid = userCredential.user.uid;
            getDoc(doc(db, "User", userCredential.user.uid)).then(function(doc) {
                req.session.name = doc.data().name;
                req.session.save();
                res.redirect("/");
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            session.errorCode = errorCode;
            session.errorMessage = errorMessage;
            session.errorType = 2;
            switch(session.errorMessage){
                case 'Firebase: Error (auth/wrong-password).':session.errorMessage = 'Mot de passe erroné';break;
                case 'Firebase: Error (auth/user-not-found).':session.errorMessage = 'Email incorrect';break;
            }
            req.session.save();
            res.redirect("/");
        });
})

export default router;