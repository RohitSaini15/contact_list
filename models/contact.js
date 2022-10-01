const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})

const Contact=mongoose.model('Contacts',contactSchema);// Contact will be Model class object which represent documents

module.exports=Contact