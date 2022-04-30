/**
 * Este ejemplo sirve para ver cómo tener una base de datos actualizada en tiempo
 * real con supabase
 */
 import { createClient } from '@supabase/supabase-js'
 import 'dotenv/config'

 const client = createClient(process.env['SUP_URL'], process.env['SUP_API']);

 // On: * , INSERT, UPDATE, ETC.
 // Para recibir los cambios previos también, atender a clase :-)
client.from('movies').on('*', payload => {
  console.log('¡Cambios recibidos!', payload)
}).subscribe()
