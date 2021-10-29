const express = require('express');
const app = express();

app.get('/', (req,res) => {
    // res.send("Hello Universe 🌌")
    res.status(200).json({message: "Error occurred"})
})

app.listen(7000)