const mongoose = require('mongoose');

const deviceSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  type: { type: String, required: true },
  broadcast: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Device', deviceSchema);
