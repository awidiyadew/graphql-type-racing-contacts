/**
 * Represent connection to Contact Service
 */
class ContactConnector {
  constructor(opts) {
    Object.assign(this, opts);
  }

  async getContacts() {
    const contacts = [
      {
        name: 'Dewa XXX',
        email: 'awidiya.dewa@gmail.com',
        phone: '085737737737',
      },
      {
        name: 'Iqbal XXX',
        email: 'iqbal.vvibu@gmail.com',
        phone: '085737737737',
      },
    ];

    return Promise.resolve(contacts);
  }
}

module.exports = ContactConnector;
