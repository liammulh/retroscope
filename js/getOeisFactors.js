const getOeisFactors = ( req, res ) => {
  res.json( {
    id: req.params.oeis_id,
    num_elements: req.params.num_elements
  } )
}

export default getOeisFactors