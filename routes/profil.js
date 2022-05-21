import { Router } from "express";
import auth from "../middleware/auth.js";
var router = Router();

router.get('/' ,auth, async (req , res) => {
    res.render("../views/profil.ejs");
})

export default router;