const Query = require('./queries');
const TypeResolvers = require('./type');

const resolvers = Object.assign({ Query }, TypeResolvers);

module.exports = { resolvers };
