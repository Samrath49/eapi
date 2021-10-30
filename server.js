const express = require('express');
const app = express();

app.set("view engine", 'ejs')

app.get('/', (req,res) => {
    // res.download("./package-lock.json")
    // res.status(200).json({message: "Error occurred"})
    res.render('index')
})

app.listen(7000)