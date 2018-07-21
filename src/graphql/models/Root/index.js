const rootSchema = require('./schema');
const { resolvers: rootResolver } = require('./resolvers');

module.exports = {
  rootSchema,
  rootResolver,
};
