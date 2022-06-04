const express = require('express');
const router = express.Router();
const{
    getAllAnswers,
    createAnswer,
    deleteAnswer,
    updateAnswer
} = require('../controller/forumController');

router.route('/').get(getAllAnswers).post(createAnswer);
router.route('/:id').delete(deleteAnswer).patch(updateAnswer);
module.exports = router;