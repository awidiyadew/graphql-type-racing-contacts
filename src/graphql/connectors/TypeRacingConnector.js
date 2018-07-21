/**
 * Represent connection to Type Racing Service
 */
class TypeRacingConnector {
  constructor(opts) {
    Object.assign(this, opts);
  }

  async getTypeRacing(email) {
    const typeRacings = [
      {
        email: 'awidiya.dewa@gmail.com',
        score: 100,
        nationality: 'Indonesia',
      },
      {
        email: 'iqbal@gmail.com',
        score: 200,
        nationality: 'Japan',
      },
      {
        email: 'reza@gmail.com',
        score: 300,
        nationality: 'Unknown',
      },
    ];

    const result = typeRacings.find(typeRacing => typeRacing.email === email);

    return Promise.resolve(result);
  }
}

module.exports = TypeRacingConnector;
