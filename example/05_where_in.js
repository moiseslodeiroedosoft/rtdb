/**
 * Este ejemplo sirve para ver cómo obtener una serie de documentso de
 * una colección
 * @see https://firebase.google.com/docs/reference/js/firestore_lite
 * @see https://cloud.google.com/firestore/docs/query-data/queries?hl=es-419#query_operators
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore/lite';
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env['API_KEY'] || 'API_KEY_VACIA',
  authDomain: process.env['AUTH_DOMAIN'] || 'AUTH_DOMAIN_VACIO',
  projectId: process.env['PROJECT_ID'] || 'PROJECT_ID_VACIO'
};
const db = getFirestore(initializeApp(firebaseConfig));

// --------------------------------------------------------
const q = query(collection(db, "movies"), where("year", "in", ["2008", "2009"])); // Equivale a where X == 2008 || X == 2009
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id);
  console.table(doc.data());
});
