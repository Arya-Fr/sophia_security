var express = require("express");
var router = express.Router();

const {getIpAdress} = require('../views/ip-adress');

router.get('/' , async (req , res) => {
    const ip = await getIpAdress(req);
    res.send(`Voici votre Ip: ${ip}`);
})

module.exports = router;