const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Get the default middlewares
const middlewares = jsonServer.defaults();

// Remove the static middleware
delete middlewares.static;

// Use the modified middlewares
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
