const FirestoreService = require('./FirestoreService');

/**
 * Represent connection to Type Racing Service
 */
class TypeRacingConnector {
  constructor(opts) {
    Object.assign(this, opts);
    this._firestoreService = new FirestoreService(this.config);
  }

  getTypeRacing(email) {
    return this._firestoreService.getPlayerByEmail(email);
  }
}

module.exports = TypeRacingConnector;
