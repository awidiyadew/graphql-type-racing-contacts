const merge = require('lodash/merge');

const { rootSchema, rootResolver } = require('./models/Root');
const { contactSchema, contactResolvers } = require('./models/Contact');

const resolvers = merge(rootResolver, contactResolvers);

const typeDefs = [
  ...rootSchema,
  ...contactSchema,
];

module.exports = {
  resolvers,
  typeDefs,
};
