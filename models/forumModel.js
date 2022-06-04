const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true
    },
    universityID: {
        type: Number,
        required: [true, 'University is required'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        trim: true
    },
    semester: {
        type: Number,
        required: [true, 'Semester is required'],
        trim: true
    },
    graduationDate: {
        type: Date,
        default: Date.now,
        trim: true
    }
})

const uniSchema = new mongoose.Schema({
    emailPostfix: String,
    name: String
});

const users = mongoose.model('users', userSchema);
const university = mongoose.model('universities', uniSchema)
module.exports = { users, university };