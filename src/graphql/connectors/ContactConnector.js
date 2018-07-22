const axios = require('axios');

/**
 * Represent connection to Contact Service
 */
class ContactConnector {
  constructor(opts) {
    Object.assign(this, opts);
  }

  async getContacts() {
    const contactsResponse = await axios.get('http://localhost:3000/contacts');
    const { data: contacts } = contactsResponse;
    return contacts;
  }
}

module.exports = ContactConnector;
