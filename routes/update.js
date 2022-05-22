import { Router } from "express";
import { auth,db } from '../config/db.js';
import { updateEmail,updatePassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
var router = Router();

router.post('/' , async (req , res) => {
    if (req.body.name != null) {
        setDoc(doc(db, "User", req.session.uid), {
            name: req.body.name,
          });
        req.session.name = req.body.name;
        req.session.save();
      }
    if (req.body.mail != null){
        updateEmail(auth.currentUser, req.body.mail).then(() => {
            req.session.usermail = req.body.mail;
            req.session.save();
            console.log("Email change successfull");
          }).catch((error) => {
            console.log("Email change failed");
          });
    }
    if (req.body.password != null){
        updatePassword(auth.currentUser, req.body.password).then(() => {
            console.log("Password change successfull");
          }).catch((error) => {
            console.log("Password change failed");
          });
    }
    res.redirect("/");
})

export default router;