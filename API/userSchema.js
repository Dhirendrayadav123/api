const mongoose=require('mongoose');

const userSchema = mongoose.Schema({
    name: String

});
const postUser = mongoose.model('user', userSchema);
module.exports=postUser;