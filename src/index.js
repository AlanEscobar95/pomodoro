require ('dotenv').config();

const app = require('./server.js');
require('./Database/dataBase.sql.js');

app.listen(app.get('port'), () => {
  console.log('Server listening on port', app.get('port'));
});
