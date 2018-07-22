const Query = require('./queries');
const TypeResolvers = require('./type');
const Mutation = require('./mutations');

const resolvers = Object.assign({ Query, Mutation }, TypeResolvers);

module.exports = { resolvers };
