const ContactConnector = require('./ContactConnector');
const TypeRacingConnector = require('./TypeRacingConnector');

const getConnectors = (headers, config) => ({
  contactConnector: new ContactConnector({ headers, config }),
  typeRacingConnector: new TypeRacingConnector({ headers, config }),
});

module.exports = {
  getConnectors,
};
