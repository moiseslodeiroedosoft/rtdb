/**
 * Este ejemplo sirve para ver cómo tener una base de datos actualizada en tiempo
 * real con firebase.
 */

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue} from "firebase/database";

import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env['API_KEY'] || 'API_KEY_VACIA',
  authDomain: process.env['AUTH_DOMAIN'] || 'AUTH_DOMAIN_VACIO',
  projectId: process.env['PROJECT_ID'] || 'PROJECT_ID_VACIO',
  databaseURL: process.env['FB_URL'] || 'FB_URL_VACIO',
  messagingSenderId: process.env['SENDER'] || 'SENDER_VACIO',
  appId: process.env['APP_ID'] || 'APP_ID_VACIO',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const yearRef = ref(db, 'movies/12angrymen/year');
onValue(yearRef, (snapshot) => {
  const data = snapshot.val();
  console.log(snapshot.val());
});

/**
 * {
  "rules":{
    "movies": {
      "12angrymen": {
        ".read": true,
        ".write": true
      },
      ".read": false,
      ".write": true
    }
  }
}
 */

// ??
const movieRef = ref(db, 'movies/alive');
onValue(movieRef, (snapshot) => {
  const data = snapshot.val();
  console.log(snapshot.val());
});
