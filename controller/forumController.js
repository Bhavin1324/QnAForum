const {users, university} = require('../models/forumModel');

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
        res.status(200).json({singleUser});
    }
    catch(err){
        res.status(500).json({error: err});
    }
}

const createUser = async (req, res, next)=>{
    try{
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
/* const getUser = async (req, res, next)=>{
    try{
        const {id:userID} = req.params;
        const singleUser = await users.findOne({_id:userID});
        res.status(200).json({singleUser});
        if(!singleUser){
            return res.status(404).json({error:`No user found with ID ${userID}`})
        }
    }
    catch(err){
        res.status(500).json({msg: err});
    }
}

const createUser = async (req, res, next)=>{
    try{
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
 */
module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    getUniversity
};