import { Router } from "express";
var router = Router();

router.get('/', async (req, res) => {
    res.render("../views/index.ejs", {error: req.session.errorMessage,account: req.session.log,type: req.session.errorType, pseudo: req.session.name, mail: req.session.usermail});
    req.session.errorMessage = null;
    req.session.errorType = null;
    req.session.errorCode = null;
    req.session.save();
})

export default router;