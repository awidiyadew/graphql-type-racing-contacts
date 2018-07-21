const ContactConnector = require('./ContactConnector');

const getConnectors = headers => ({
  contactConnector: new ContactConnector({ headers }),
});

module.exports = {
  getConnectors,
};
