const mongoose = require('mongoose');
const { Schema} = mongoose
const { ObjectId } = Schema.Types;


const TaskSchema = new Schema({
    _id: ObjectId,
    name: String,
    description: String,
    deliveryDate: Number,
});

module.exports = mongoose.model("Task", TaskSchema);