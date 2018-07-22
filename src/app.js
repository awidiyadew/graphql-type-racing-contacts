const hapi = require('hapi');
const createApolloServer = require('./createApolloServer');

const startServer = async () => {
  const options = {
    host: 'localhost',
    port: process.env.PORT || 4000,
    debug: {
      log: ['info', 'error'],
    },
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  };

  const server = new hapi.Server(options);

  try {
    await createApolloServer(server);
    await server.start();
  } catch (err) {
    server.log('error', `An error occurred starting the server: ${err}. Shuting down.`);
    process.exit(1);
  }

  server.log('info', `Server running at ${server.info.uri}`);
};

startServer();
