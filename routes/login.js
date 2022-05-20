import { Router } from "express";
var router = Router();
import csrf from 'csurf';
import { fauth } from '../config/db.js';

//var csrfProtection = csrf({ cookie: true })

router.post('/', async (req, res) => {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.redirect("/");
})

export default router;