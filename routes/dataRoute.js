const express = require('express');
const {getData} = require('../controller/access');
const router = express.Router();
router.route('/').get(getData);
module.exports = router;