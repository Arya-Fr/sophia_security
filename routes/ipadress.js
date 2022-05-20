import { Router } from "express";
var router = Router();

import { getIpAdress } from '../views/ip-adress.js';

router.get('/' , async (req , res) => {
    const ip = await getIpAdress(req);
    res.send(`Voici votre Ip: ${ip}`);
})

export default router;