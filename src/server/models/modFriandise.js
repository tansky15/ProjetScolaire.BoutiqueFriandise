const mongoose = require('mongoose');
const friandisesShema=new mongoose.Schema({
brand:String,
price:String,
compagnie:String,
});
module.exports=mongoose.model('friandise',friandisesShema);