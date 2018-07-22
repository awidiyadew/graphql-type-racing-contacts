const axios = require('axios');

/**
 * Represent connection to Contact Service
 */
class ContactConnector {
  constructor(opts) {
    Object.assign(this, opts);
  }

  async getContacts() {
    const response = await axios.get(`${this.config.CONTACT_URL}/contacts`);
    const { data: contacts } = response;
    return contacts;
  }

  async createContact(contact) {
    const response = await axios.post(`${this.config.CONTACT_URL}/contacts`, contact);
    const { data: insertedContact } = response;
    return insertedContact;
  }
}

module.exports = ContactConnector;
