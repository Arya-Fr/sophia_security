import { Router } from "express";
var router = Router();

router.get('/' , async (req , res) => {
    res.send('The id you specified is ' + req.params.id);
})

export default router;