require ('dotenv').config();

const app = require('./server.js');


app.listen(app.get('port'), () => {
  console.log('Server listening on port', app.get('port'));
});
