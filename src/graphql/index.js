const merge = require('lodash/merge');

const { rootSchema, rootResolver } = require('./models/Root');
const { contactSchema, contactResolvers } = require('./models/Contact');
const { typeRacingSchema, typeRacingResolvers } = require('./models/TypeRacing');

const resolvers = merge(rootResolver, contactResolvers, typeRacingResolvers);

const typeDefs = [
  ...rootSchema,
  ...contactSchema,
  ...typeRacingSchema,
];

module.exports = {
  resolvers,
  typeDefs,
};
