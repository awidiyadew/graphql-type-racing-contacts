class Contact {
  static getContacts(ctx) {
    return ctx.connectors.contactConnector.getContacts();
  }

  static createContact(contact, ctx) {
    return ctx.connectors.contactConnector.createContact(contact);
  }
}

module.exports = Contact;
