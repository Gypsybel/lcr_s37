var states = require('../controllers/stateController.js');
module.exports = function(app){
  app.get('/', states.index);
  app.get('/states', states.getStates);
  app.post('/states', states.create);
  app.get('/states/:id', states.show)
  app.put('/states/:id', states.update);
  app.delete('/states/:id', states.delete)
}
