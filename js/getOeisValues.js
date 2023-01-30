// TODO: Is there a maximum number of values in a b-file?

import getBFile from './getBFile.js'
import parseBFile from './parseBFile.js'

const OEIS_ID_LENGTH = 7

const getOeisValues = async ( req, res ) => {

  // Check to see if the OEIS ID provided has the correct length.
  if ( req.params.oeis_id.length !== OEIS_ID_LENGTH ) {
    res.send( `The OEIS ID you entered has ${req.params.oeis_id.length} character(s). `
              + `It should have ${OEIS_ID_LENGTH}.` )
    return // Don't execute the rest of the code.
  }

  // Get the sequence.
  const bFile = await getBFile( req.params.oeis_id )
  const sequenceObject = parseBFile( bFile )

  // Check to see if the number of elements asked for is greater than
  // what the sequence object has.
  const sequenceKeys = Object.keys( sequenceObject )
  const actualNumberOfElements = sequenceKeys.length
  const requestedNumberOfElements = Number( req.params.num_elements )
  if ( requestedNumberOfElements > actualNumberOfElements ) {
    res.send( `You asked for ${requestedNumberOfElements} element(s), but `
              + `${req.params.oeis_id} only has ${actualNumberOfElements}.` )
    return // Don't execute the rest of the code.
  }

  // Make new object with correct number of elements.
  let subsetSequenceObject = {}
  for ( let i = 0; i < requestedNumberOfElements; i++ ) {
    const key = sequenceKeys[ i ]
    subsetSequenceObject[ key ] = sequenceObject[ key ]
  }

  // Otherwise, send the sequence object.

  // Pretty-print the JSON. See https://stackoverflow.com/a/32679526/15027348.
  res.header( 'Content-Type', 'application/json' )
  const objectToSend = {
    id: req.params.oeis_id,
    name: `${req.params.oeis_id} [name not yet loaded]`,
    values: sequenceObject
  }
  res.send( JSON.stringify( objectToSend, null, 4 ) )
}

export default getOeisValues
