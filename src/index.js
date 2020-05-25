const app = require('./config/server')();
const hostname = '127.0.0.1';
const port = 3000;
app.listen(3000, () => console.log(`Server running at http://${hostname}:${port}/`));
