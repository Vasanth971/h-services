const express = require("express");
const connectDB = require("./config/db")
const dotenv= require("dotenv");
const route = require("./routes/router")

dotenv.config();

const app = express();
const port = 3000 ||  process.env.port;

app.use(express.json())
app.use("/api",route);



app.listen(port, () => {
    console.log(`\n\t server is running on port : ${port}`);
        connectDB()
})