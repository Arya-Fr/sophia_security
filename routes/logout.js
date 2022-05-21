import { auth } from '../config/db.js';
import { Router } from "express";
var router = Router();
import { signOut } from "firebase/auth";

router.get('/', async (req, res) => {
    signOut(auth).then(() => {
        req.session.destroy();
        res.redirect("/");
      }).catch((error) => {
        // An error happened.
      });
})

export default router;