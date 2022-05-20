import { auth,createUserWithEmailAndPassword,db } from '../config/db.js';
import { Router } from "express";
var router = Router();
import csrf from 'csurf';
import { doc, setDoc } from "firebase/firestore";

//var csrfProtection = csrf({ cookie: true })

router.post('/', async (req, res) => {
    var user_name = req.body.name;
    var user_mail = req.body.mail;
    var password = req.body.password;

    var session = req.session;

    createUserWithEmailAndPassword(auth,user_mail,password)
    .then((userCredential) => {
        session.usermail=userCredential.user.email;
        session.token=userCredential.user.accessToken;
        req.session.log = true;
        req.session.save();
        setDoc(doc(db, "User", userCredential.user.uid), {
            name: user_name,
          });

        res.redirect("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        session.errorCode = errorCode;
        session.errorMessage = errorMessage;
        session.errorType = 1;
        switch(session.errorMessage){
            case 'Firebase: Error (auth/email-already-in-use).':session.errorMessage = 'Email déjà utiliser';break;
        }
        req.session.save();
        res.redirect("/");
      });
})

export default router;