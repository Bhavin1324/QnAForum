const express = require('express');
const {
    getAllUsers,
    createUser,
    deleteUser,
    getUser,
    updateUser,
} = require('../controller/forumController');

const router = express.Router();
// user router
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

//university router
// router.route('/uni/:emailPostfix').get(getUniversity);
module.exports = router;