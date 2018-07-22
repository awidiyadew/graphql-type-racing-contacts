const axios = require('axios');

/**
 * Represent connection to Contact Service
 */
class ContactConnector {
  constructor(opts) {
    Object.assign(this, opts);
  }

  async getContacts() {
    const response = await axios.get('http://localhost:3000/contacts');
    const { data: contacts } = response;
    return contacts;
  }

  async createContact(contact) {
    const response = await axios.post('http://localhost:3000/contacts', contact);
    const { data: contacts } = response;
    return contacts;
  }
}

module.exports = ContactConnector;
