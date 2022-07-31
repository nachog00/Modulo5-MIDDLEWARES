/* require's */
const express = require('express');
const router = express.Router();

/* cotrollers */
const con = require('../controllers/main.controller.js');


router.get('/' , con.index )






module.exports = router;