class Contact {
  static getContacts(ctx) {
    return ctx.connectors.contactConnector.getContacts();
  }
}

module.exports = Contact;
