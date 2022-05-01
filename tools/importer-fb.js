/**
 * @see https://firebase.google.com/docs/reference/js/firestore_lite
 */

 import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import 'dotenv/config'
import * as fs from 'fs';

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


let data = null;


fs.readFile("./tools/movies.json", "utf8", (err, response) => {

  if (err) {
    console.error(err);
    return;
  }

  // En data tenemos los objetos del JSON de películas
  data = JSON.parse(response);
  data = data.movies;


/* Cambia las reglas a
  {
    "rules": {
      "movies": {
        ".read": false,
        ".write": true
      }
    }
  }
*/

  for(let movie of data){
    let title = movie.title;
    title = title.replace(/\.|\s|\#|\$|\[|\]|\&|\'|\·|\:|\-/ig, '').toLowerCase();
    set(ref(db, 'movies/' + title), movie);
  }

});


