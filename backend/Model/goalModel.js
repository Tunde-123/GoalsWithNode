const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({

    name : {
        type : String,
        required : [true, "please provide name "]
    },
    age : {
type : Number,
default : 18

    }
}, {
    timestamp : true
})


module.exports = mongoose.model('Goal', goalSchema)