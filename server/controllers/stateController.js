var mongoose = require('mongoose');

var States = mongoose.model('States');

module.exports = {
  index: function(req, res){
    res.render('index')
  },
  getStates: function(req, res){
    States.find({}).exec(function(err, states){
      if(err){
        res.status(500).send('There was a problem retrieving all states')
      } else {
        res.json(states);
      }
    })
  },
  create: function(req, res) {
    var newState = new States({state:req.body.state, capital:req.body.capital});
    newState.save(function(err) {
      if (err) {
        console.log("Had trouble creating new state"+err);
      } else {
        res.status(200).send("successfully created a new state")
      }
    })
  },
  show: function(req, res) {
    States.find({_id:req.params.id}, function(err, state) {
      if (err) {
        console.log("Could not find state" + err);
      } else {
        console.log(state);
        res.json(state)
      }
    })
  },
  update: function(req, res) {
    States.update({_id:req.params.id}, {$set: {capital:req.body.capital}})
    .exec(function(err, state) {
      if(err){
        res.status(500).send('State did no update');
      } else {
        res.json(state);
      }
    })
  },
  delete: function(req, res){
    States.remove({_id:req.params.id}, function(err){
      if(err){
        res.status(500).send('State did not delete')
      } else {
        res.sendStatus(200);
      }
    })
  }
}
