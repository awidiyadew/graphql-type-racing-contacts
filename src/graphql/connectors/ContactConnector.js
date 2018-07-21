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
        name: 'Dewa',
        email: 'awidiya.dewa@gmail.com',
        phone: '085737737737',
      },
      {
        name: 'Iqbal',
        email: 'iqbal@gmail.com',
        phone: '085737737737',
      },
      {
        name: 'Reza',
        email: 'reza@gmail.com',
        phone: '085737737737',
      },
    ];

    return Promise.resolve(contacts);
  }
}

module.exports = ContactConnector;
