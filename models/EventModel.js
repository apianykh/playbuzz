const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;

var EventSchema = new Schema({
  page_id:  String,
  user_id: String,
  user_agent: String,
  user_country: String,
  timestamp: Number,
});

module.exports = mongoose.model('EventModel', EventSchema);