const hapi = require('hapi');

const main = async () => {
  const options = {
    port: process.env.PORT || 3000,
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
    await server.start();
  } catch (err) {
    server.log('error', `An error occurred starting the server: ${err}. Shuting down.`);
    process.exit(1);
  }

  server.log('info', `Server running at ${server.info.uri}`);
};

main();
