const mongoose = require("mongoose");

const _TheSchemaTable = new mongoose.Schema({
 fullname:{
      type:String,required:true

 },
email:{
    type:String,required:true

},
speciesName:{
    type:String,required:true

},
post:{
    type:String,required:true

},
image:{
    type:String,required:true

},



});


const TheSchemaTable = mongoose.model("TheSchemaTable",_TheSchemaTable);


module.exports = TheSchemaTable;