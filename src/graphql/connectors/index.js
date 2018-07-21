const ContactConnector = require('./ContactConnector');
const TypeRacingConnector = require('./TypeRacingConnector');

const getConnectors = headers => ({
  contactConnector: new ContactConnector({ headers }),
  typeRacingConnector: new TypeRacingConnector({ headers }),
});

module.exports = {
  getConnectors,
};
