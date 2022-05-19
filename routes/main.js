var express = require("express");
var router = express.Router();

const genererPageAccueil = require('../views/index-get')

router.get('/', async (req, res) => {
    const indexHtml = await genererPageAccueil()
    res.send(indexHtml)
})

module.exports = router;