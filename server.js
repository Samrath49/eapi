const express = require('express');
const app = express();

app.set("view engine", 'ejs')

app.get('/', (req,res) => {
    // res.download("./package-lock.json")
    // res.status(200).json({message: "Error occurred"})
    res.render('index', {message: "Universe 🌌"})
})

const userRouter = require('./routes/users');
app.use("/users", userRouter)

app.listen(7000)