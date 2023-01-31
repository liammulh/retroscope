import gpChildProcess from './gpChildProcess.js';

const getOeisFactors = async ( req, res ) => {
  gpChildProcess.stdin.write( 'factor(10)\n' )
  const gpData = []
  gpChildProcess.stdout.on( 'data', data => {
    gpData.push( data.toString() )
    console.log( gpData )
  } )
  res.json( {
    id: req.params.oeis_id,
    num_elements: req.params.num_elements
  } )
}

export default getOeisFactors