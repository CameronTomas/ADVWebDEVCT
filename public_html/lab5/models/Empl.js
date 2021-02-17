var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var EmplSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})
var Empl = mongoose.model('Review', EmplSchema)
mongoose.model('food',EmplSchema)
module.exports = Empl