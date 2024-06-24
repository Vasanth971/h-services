
const express = require("express")
const { SignIn, SignUp} = require("../controller/SignIn");

const route = express.Router()

route.post('/signin', SignIn);
route.post('/signup', SignUp);

module.exports = route;