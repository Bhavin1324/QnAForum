const express = require('express');
const router = express.Router();
const {getUniversity} = require("../controller/forumController");

//university router
router.route('/:emailPostfix').get(getUniversity);
module.exports = router;