const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

/* Esquema de uma atividade ela tem o seu id nome descrição e data de entrega */
const TaskSchema = new Schema({
  _id: ObjectId,
  name: String,
  description: String,
  deliveryDate: Number,
});

module.exports = mongoose.model('Task', TaskSchema);
