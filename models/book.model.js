const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    title : String,
    name: String,
    author : String,
    category : String,
    count : {
        type : Number,
        default : 0
    }
});

module.exports = mongoose.model('Book', BookSchema);
