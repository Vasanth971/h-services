const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt  = require("jsonwebtoken");

const JWT_SECRET = "vasanth_kumar"
const app = express();

const signupSchema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
})

app.post('/signup', async (req, res) => {
    const { success } = signupSchema.safeParse(req.body);

    if (!success) {
        return res.status().json({
            msg: "Invalid Inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username,
    })

    if (existingUser) {
        return res.status(409).json({
            msg: "User already exits"
        })
    }

    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    const userId = user._id
    const token = jwt.sign({
        userId
    },
    JWT_SECRET
    )

    return res.json({
        msg: "User Successfully Created!",
        token: token
    })
})


//SignIn
const signinSchema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
})

app.post('/signin', async (req, res) => {
    const { success } = signinSchema.safeParse(req.body)

    if (!success) {
        return req.status(404).json({
            msg: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if (user) {
        const token = jwt.sign({
            userId: user._id,
        },
        JWT_SECRET);

        res.json({
            token: token
        });
        return;
    }

    return res.status(411).json({
        msg: "Error While logging in!"
    })
})


app.listen(3000, () => {
    console.log("Server is Running on port")
})