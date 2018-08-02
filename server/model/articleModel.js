var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema =  new Schema({
    title: { 
        type: String 
    },
    content: String, 
    category: [{type: String}],
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

var articleModel = mongoose.model("Article", articleSchema);

module.exports = articleModel;


