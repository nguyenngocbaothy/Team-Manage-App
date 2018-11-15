const app = require('./app');
require('./startDatabase');


app.listen(4000, () => console.log('Server started!'));