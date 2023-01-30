const express = require( 'express' )
const app = express()

const PORT = 3000

app.get( '/', ( req, res ) => {
  res.send( 'Hello, retroscope!' )
} )

app.listen( PORT, () => {
  console.log( 'retroscope started' )
  console.log( `http://localhost:${PORT}` )
} )
