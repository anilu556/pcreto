const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    status: String
},{collection: 'usuarios'});

const User = mongoose.model('User', userSchema);

module.exports = User;