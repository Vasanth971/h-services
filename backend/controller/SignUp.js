const jwt = require("jsonwebtoken")
const zod = require("zod");
const { User } = require("../models/User")
const dotenv = require("dotenv")
const bcrypt = require('bcrypt')

dotenv.config();

const SignUpSchema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
})

const SignUp = async (req, res) => {
    const parseResult = SignUpSchema.safeParse(req.body)

    if (!parseResult.success) {
        return res.status(404).json({
            msg: "Invalid Inputs!"
        })
    }
    try {
        const existingOne = await User.findOne({
            username: req.body.username
        })
    
        if (existingOne) {
            return res.status(409).json({
                msg: "User already exists!"
            })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
    
        const token = jwt.sign({
            user: user._id
        },process.env.jwt_secret)
    
        return res.status(201).json({
            token: token,
            msg: "User created Succesfully!"
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Error While creating user!"
        })
    }
    
    
}

module.exports = SignUp