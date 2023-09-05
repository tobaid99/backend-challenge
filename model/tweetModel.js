const moment = require("moment/moment")
const mongoose =require('mongoose')
const schema = mongoose.Schema;


const tweetSchema = new schema({
    title:{
        type: String,
        required: true,
        minlength : 20
    },
    tweet:{
        type: String,
        required: true,
        maxlength :50
    },
    create_at:{
        type: Date ,
        default :Date.now,
        get : function(createAt){
            return moment(createAt).format("DD/MM/YYYY");
        }
    }
},{timestamps: true})

module.exports = mongoose.model('Tweet',tweetSchema)    