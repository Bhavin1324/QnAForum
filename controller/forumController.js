const Cryptr = require('cryptr');
const {users, university, question, answer} = require('../models/forumModel');
const cryptr = new Cryptr('RegistartionPassword');
//User access
const getAllUsers = async (req, res, next)=>{
    try{
        const allUsers = await users.find({});
        res.status(200).json({allUsers});
    }
    catch(err){
        res.status(500).json({msg: err});
    }
}
const getUser = async (req, res, next)=>{
    try{
        const {id:email} = req.params;
        const singleUser = await users.findOne({email:email});
        if(!singleUser){
            return res.status(404).json({error:`No user found with email ${email}`})
        }
        const passDec = cryptr.decrypt(singleUser.password);
        singleUser.password = passDec;
        res.status(200).json({singleUser});
    }
    catch(err){
        res.status(500).json({error: err});
    }
}

const createUser = async (req, res, next)=>{
    try{
        const passEnc = cryptr.encrypt(req.body.password);
        req.body.password = passEnc;
        const user = await users.create(req.body);
        res.status(201).json({user});
    }
    catch(err){
        res.status(500).json({msg: err});
    }
}
const deleteUser = async (req, res, next)=>{
    try{
        const {id:userID} = req.params;
        const userDel = await users.findOneAndDelete({_id:userID});
        if(!userDel){
            return res.status(404).json({error:`No user found with ID ${userID}`})
        }
        res.status(200).json({success: true, msg: `Response deleted successfully`});
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}
const updateUser = async (req, res, next)=>{
    try{
        const {id:userID} = req.params;
        const newData = req.body;
        const userUpd = await users.findByIdAndUpdate({_id:userID},newData,{
            new: true,
            runValidators: true
        });
        if(!userUpd){
            return res.status(404).json({error:`No user found with ID ${userID}`})
        }
        res.status(200).json({userUpd});
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}


//University access
const getUniversity = async (req, res, next)=>{
    try{
        const {emailPostfix} = req.params;
        // console.log(emailPostfix);
        const uni = await university.findOne({emailPostfix:emailPostfix});
        if(!uni){
            return res.status(404).json({error:`No user found with ID ${emailPostfix}`})
        }
        res.status(200).json({uni});
    }
    catch(err){
        res.status(500).json({msg: err});
    }
}


//questions access

const getAllQuestions = async (req, res)=>{
    try{
        const questions = await question.find({});
        if(!questions)
        {
            return res.status(404).json({error:`No questions found`});
        }
        res.status(200).json({questions})
    }
    catch(err)
    {
        res.status(500).json({msg: err})
    }
}

const createQuestion = async (req, res)=>{
    try{
        const ques = await question.create(req.body);
        res.status(201).json({ques});
    }
    catch(err){
        res.status(500).json({msg: err});
    }
}

const deleteQuestion = async (req, res)=>{
    try{
        const {id:questionID} = req.params;
        const quesDel = await question.findOneAndDelete({_id:questionID});
        if(!quesDel){
            return res.status(404).json({error:`No question found with ID ${questionID}`})
        }
        res.status(200).json({success: true, msg: `Response deleted successfully`});
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

const updateQuestion = async (req, res)=>{
    try{
        const {id:questionID} = req.params;
        const newData = req.body;
        const questionUpdate = await question.findByIdAndUpdate({_id:questionID},newData,{
            new: true,
            runValidators: true
        });
        if(!questionUpdate){
            return res.status(404).json({error:`No question found with ID ${questionID}`})
        }
        res.status(200).json({questionUpdate});
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}


//answer controller

const getAllAnswers = async (req, res)=>{
    try{
        const answers = await answer.find({});
        if(!answers)
        {
            return res.status(404).json({error:`No answer found`});
        }
        res.status(200).json({answers})
    }
    catch(err)
    {
        res.status(500).json({msg: err})
    }
}

const createAnswer = async (req, res)=>{
    try{
        const ans = await answer.create(req.body);
        res.status(201).json({ans});
    }
    catch(err){
        res.status(500).json({msg: err});
    }
}

const deleteAnswer = async (req, res)=>{
    try{
        const {id:answerID} = req.params;
        const ansDel = await answer.findOneAndDelete({_id:answerID});
        if(!ansDel){
            return res.status(404).json({error:`No answer found with ID ${answerID}`})
        }
        res.status(200).json({success: true, msg: `Response deleted successfully`});
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

const updateAnswer = async (req, res)=>{
    try{
        const {id:answerID} = req.params;
        const newData = req.body;
        const answerUpdate = await answer.findByIdAndUpdate({_id:answerID},newData,{
            new: true,
            runValidators: true
        });
        if(!answerUpdate){
            return res.status(404).json({error:`No answer found with ID ${answerID}`})
        }
        res.status(200).json({answerUpdate});
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    getUniversity,
    getAllQuestions,
    createQuestion,
    deleteQuestion,
    updateQuestion,
    getAllAnswers,
    createAnswer,
    deleteAnswer,
    updateAnswer
};