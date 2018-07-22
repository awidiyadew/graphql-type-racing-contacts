const {
  ApolloServer,
  makeExecutableSchema,
} = require('apollo-server-hapi');

const models = require('./graphql/models');
const { typeDefs, resolvers } = require('./graphql');
const { getConnectors } = require('./graphql/connectors');

const createApolloServer = async (hapiServer) => {
  const executableSchema = makeExecutableSchema({ typeDefs, resolvers });

  const server = new ApolloServer({
    schema: executableSchema,
    context: async ({ request }) => {
      const { headers } = request;
      const config = process.env;

      return {
        models,
        connectors: getConnectors(headers, config),
      };
    },
  });

  await server.applyMiddleware({ app: hapiServer });
  await server.installSubscriptionHandlers(hapiServer.listener);
};

module.exports = createApolloServer;
