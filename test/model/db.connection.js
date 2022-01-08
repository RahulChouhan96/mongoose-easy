require("./user.model");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practice', { useNewUrlParser: true })
    .then(() => console.log("Connected to DB!"))
    .catch((e) => console.log("ERROR WHILE CONNECTING TO DB", e));