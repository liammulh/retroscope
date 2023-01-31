import express from 'express'
import getOeisFactors from './js/getOeisFactors.js';
import getOeisValues from './js/getOeisValues.js'

const app = express()
const PORT = 3000

app.get( '/', ( req, res ) => {
  res.send( 'Hello, retroscope!' )
} )

app.get( '/api/get_oeis_values/:oeis_id?/:num_elements?', getOeisValues )

app.get( '/api/get_oeis_factors/:oeis_id?/:num_elements?', getOeisFactors )

app.listen( PORT, () => {
  console.log( 'retroscope started' )
  console.log( `http://localhost:${PORT}` )
} )
