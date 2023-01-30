import axios from 'axios'

const OEIS_URL = `https://oeis.org`

// TODO: Handle errors.

const getBFile = async oeisId => {
  const bFileUrl = `${OEIS_URL}/${oeisId}/b${oeisId.slice( 1 )}.txt`
  const bFileRes = await axios.get( bFileUrl )
  return bFileRes.data
}

export default getBFile
