import express from 'express'
import getOeisValues from './js/getOeisValues.js'

const app = express()
const PORT = 3000

app.get( '/', ( req, res ) => {
  res.send( 'Hello, retroscope!' )
} )

app.get( '/api/get_oeis_values/:oeis_id?/:num_elements?', getOeisValues )

app.listen( PORT, () => {
  console.log( 'retroscope started' )
  console.log( `http://localhost:${PORT}` )
} )
