var express = require("express");
var router = express.Router();

router.post('/', async (req, res) => {
    
    res.redirect('/');
})
