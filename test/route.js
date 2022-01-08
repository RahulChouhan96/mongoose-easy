require("./model/db.connection");

const mongoose = require('mongoose');
const express = require('express');

let app = express();

app.get("/testing", (req, res) => {
    let searchQuery = {};

    let condSortQuery = {
        $cond: [{ $gte: ["$marks", 90] }, true, false]
    };

    let sortOrder = -1;

    let normalSortQuery = { rollNo: -1 };

    mongoose.model("User").conditionalSort(searchQuery, condSortQuery, sortOrder, normalSortQuery,
        (error, response) => res.status(200).json(response));
});

app.listen(9000, (err) => {
    if (err)
        console.log("ERROR WHILE STARTING SERVER", err);
    else
        console.log("Server running at 9000!");
});