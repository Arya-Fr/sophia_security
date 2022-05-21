import { Router } from "express";
var router = Router();

router.get('/' , async (req , res) => {
    var articles = [
        {title: "Man Discovers Different Opinion", author: "Reginald", date: "9/2/45"},
        {title: "Tigers Aren't Great Pets", author: "Simon", date: "4/13/95"},
        {title: "Eating Cake for Breakfast", author: "Katie", date: "8/20/13"}
    ];
    res.render("../views/forum.ejs",{posts: articles});
})

export default router;