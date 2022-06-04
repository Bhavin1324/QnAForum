const express = require('express')
const router = express.Router()
const{
    getAllQuestions,
    createQuestion,
    deleteQuestion,
    updateQuestion
} = require('../controller/forumController')


router.route('/').get(getAllQuestions).post(createQuestion)
router.route('/:id').delete(deleteQuestion).patch(updateQuestion)

module.exports = router