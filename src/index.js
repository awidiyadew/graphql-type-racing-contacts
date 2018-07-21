const hapi = require('hapi');
const {
  ApolloServer,
  makeExecutableSchema,
} = require('apollo-server-hapi');

const { typeDefs, resolvers } = require('./graphql');
const models = require('./graphql/models');
const { getConnectors } = require('./graphql/connectors');

const createApolloServer = async (app) => {
  const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema: executableSchema,
    context: async ({ request, h }) => {
      const { headers } = request;

      return {
        models,
        connectors: getConnectors(headers),
      };
    },
  });

  await server.applyMiddleware({ app });
  await server.installSubscriptionHandlers(app.listener);
};

const main = async () => {
  const options = {
    host: 'localhost',
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

  const app = new hapi.Server(options);

  try {
    await createApolloServer(app);
    await app.start();
  } catch (err) {
    app.log('error', `An error occurred starting the server: ${err}. Shuting down.`);
    process.exit(1);
  }

  app.log('info', `Server running at ${app.info.uri}`);
};

main();
