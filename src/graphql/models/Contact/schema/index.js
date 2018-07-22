const schema = require('./schema.gql');
const mutation = require('./mutation.gql');
const input = require('./input.gql');

module.exports = [
  ...schema,
  ...mutation,
  ...input,
];
