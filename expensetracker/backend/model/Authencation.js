// const mongoose=require('mongoose')
// const authencation=mongoose.Schema({
//     username:{
//         type:String,
//     }, 
  

// password:{
//     type:String,
//     required:true,
        
        
        
//     },

// })
// module.exports=('userdata',authencation)
const mongoose = require('mongoose');

const authenticationSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Authentication = mongoose.model('Authentication', authenticationSchema);

module.exports = Authentication;
