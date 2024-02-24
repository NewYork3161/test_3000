const mongoose = require("mongoose");
const TheSchemaTable = require("./models/TheSchemaTable");
require("dotenv").config();
mongoose.connect(process.env.URI)
.then(()=>{

  console.log("You connected to mongoose");

})
.catch(error=>{

console.log(error);

});



const INSERT_INTO = [
{
fullname:"Tim Kim",
email:"fgdfgdfg@gmail.com",
speciesName:"fbfgbdgb",
post:"Hello",
image:"teghrthrth"


}



]


TheSchemaTable.insertMany(INSERT_INTO)
.then((res)=>{

    console.log(res);
  
  })
  .catch(error=>{
  
  console.log(error);
  
  });