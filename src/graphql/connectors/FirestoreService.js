const { firebase } = require('@firebase/app');
const dotenv = require('dotenv');
require('@firebase/firestore');

dotenv.config();

/**
 * Represent a service to connect with Firestore Database
 */
class FirestoreService {
  constructor(config) {
    this._init(config);
    this._firestore = firebase.firestore();
    this._COLLECTION_NAME = 'players';
  }

  _init(config) {
    const options = {
      apiKey: config.API_KEY,
      authDomain: config.AUTH_DOMAIN,
      databaseURL: config.DATABASE_URL,
      projectId: config.PROJECT_ID,
      storageBucket: config.STORAGE_BUCKET,
      messagingSenderId: config.MESSAGING_SENDER_ID,
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(options);
    }
  }

  getPlayerByEmail(email) {
    return this._firestore
      .collection(this._COLLECTION_NAME)
      .where('email', '==', email)
      .get()
      .then((querySnapshot) => {
        const [player] = querySnapshot.docs;
        return player ? player.data() : null;
      });
  }
}

module.exports = FirestoreService;
