var mongoose = require('mongoose');

var StateSchema = new mongoose.Schema({
  state: {type: String, required:true, minlenght:2},
  capital: {type: String, required:true, minlenght:2},
  created_at: Date

});

mongoose.model('States', StateSchema);
