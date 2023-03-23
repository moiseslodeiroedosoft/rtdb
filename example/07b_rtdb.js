/**
 * Este ejemplo sirve para ver cómo tener una base de datos actualizada en tiempo
 * real con firestore.
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot, collection, query } from 'firebase/firestore';
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env['API_KEY'] || 'API_KEY_VACIA',
  authDomain: process.env['AUTH_DOMAIN'] || 'AUTH_DOMAIN_VACIO',
  projectId: process.env['PROJECT_ID'] || 'PROJECT_ID_VACIO'
};
const db = getFirestore(initializeApp(firebaseConfig));

// Pon en funcionamiento el script y realiza un cambio en la película Beetlejuice
const q = query(collection(db, "movies"));
const unsub = onSnapshot(q, (doc) => {
 console.log("Datos de la película: ", doc.data());
});
