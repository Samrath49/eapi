const express = require('express');
const app = express();

app.set("view engine", 'ejs')
app.use(logger)

app.get('/', (req,res) => {
    // res.download("./package-lock.json")
    // res.status(200).json({message: "Error occurred"})
    res.render('index', {message: "Universe 🌌"})
    // If we want to apply middleware to any route we can just pass logger as function here
    // Can also define logger in user where we will log every user req
})

const userRouter = require('./routes/users');
app.use("/users", userRouter)

function logger(req,res,next){
    console.log("Req to Url: ",req.originalUrl)
    next()
}

app.listen(7000)