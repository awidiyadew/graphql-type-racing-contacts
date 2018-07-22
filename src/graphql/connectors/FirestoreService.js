const { firebase } = require('@firebase/app');
const dotenv = require('dotenv');
require('@firebase/firestore');

dotenv.config();

/**
 * Represent a service to connect with Firestore Database
 */
class FirestoreService {
  constructor() {
    this._init();
    this._firestore = firebase.firestore();
    this._COLLECTION_NAME = 'players';
  }

  _init() {
    const config = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
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
