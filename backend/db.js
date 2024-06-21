
const mongoose = require("mongoose")

mongoose.connect("mongodb://vasanth24ias:CzRq5WrauNl2EMuI@ac-sd0kvcd-shard-00-00.afpnqmj.mongodb.net:27017,ac-sd0kvcd-shard-00-01.afpnqmj.mongodb.net:27017,ac-sd0kvcd-shard-00-02.afpnqmj.mongodb.net:27017/?replicaSet=atlas-14jgl6-shard-0&ssl=true&authSource=admin")


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 18,
    }

})

const User = mongoose.model("User", UserSchema);

module.exports = {
    User
}