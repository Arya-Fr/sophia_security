import { Router } from "express";
var router = Router();

router.get('/', async (req, res) => {
    res.render("../views/index.ejs", {data: 'This is the data'});
})

export default router;