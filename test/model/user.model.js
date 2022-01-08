const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

let UserSchema = new Schema({
    name: String,
    rollNo: Number,
    marks: Number
});

const conditionalSort = require("mongoose-easy");

// After defining schema
UserSchema.plugin(conditionalSort);

module.exports = model("User", UserSchema);