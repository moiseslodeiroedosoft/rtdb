/**
 * Este ejemplo sirve para ver cómo obtener un documento en concreto haciendo
 * uso del método getDoc y firestore lite. getDoc/s trata de obtener la
 * información actualizada del servidor, aunque es posible que devuelva los
 * datos cacheados o falle si el script no puede conectarse.
 * En otros sistemas, getDocs puede aparecer como "ref"
 * @see https://firebase.google.com/docs/reference/js/firestore_lite
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc} from 'firebase/firestore/lite';
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env['API_KEY'] || 'API_KEY_VACIA',
  authDomain: process.env['AUTH_DOMAIN'] || 'AUTH_DOMAIN_VACIO',
  projectId: process.env['PROJECT_ID'] || 'PROJECT_ID_VACIO'
};
const db = getFirestore(initializeApp(firebaseConfig));

// --------------------------------------------------------

getDoc(doc(db, 'movies/Beetlejuice')).then((snap) => {
  if(snap.exists()) { // Exists se usa para saber si ese documento existe
    console.table(snap.data()); // En data() se almacenan las propiedades del objeto
  } else {
    console.log("Ups! Ese documento no existe");
  }
});
