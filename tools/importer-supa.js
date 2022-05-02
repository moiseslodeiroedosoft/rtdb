import * as fs from 'fs';
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const client = createClient(process.env['SUP_URL'], process.env['SUP_API']);
let data = null;

fs.readFile("./tools/movies.json", "utf8", (err, response) => {

  if (err) {
    console.error(err);
    return;
  }

  // En data tenemos los objetos del JSON de películas
  data = JSON.parse(response);
  data = data.movies;

  /**
   * Previamente se debe crear la base de datos movie en supabase
   */
  for(let movie of data) {

    client.from('movies').insert([
      movie
    ]).then(e => {
      console.log(e);
    })

  }

});

// Si quieren listar cambios
// client.from('movies').select().then(e => {
//   console.log(e);
// })
