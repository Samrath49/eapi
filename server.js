const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Hello Universe 🌌")
})

app.listen(7000)