const express = require('express');
const router = express.Router();
const{
    getAllQuestions,
    createQuestion,
    deleteQuestion,
    updateQuestion,
    getQuestionByUserId
} = require('../controller/forumController');


router.route('/').get(getAllQuestions).post(createQuestion);
router.route('/:id').get(getQuestionByUserId).delete(deleteQuestion).patch(updateQuestion);

module.exports = router;