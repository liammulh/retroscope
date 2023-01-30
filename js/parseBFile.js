// TODO: Handle blank lines at the end of some (all?) b-files.

const parseBFile = bFile => {
  const sequenceObject = {}
  const lines = bFile.split( '\n' )
  for ( const line of lines ) {
    const keyAndValue = line.split( ' ' )
    sequenceObject[ keyAndValue[ 0 ] ] = keyAndValue[ 1 ]
  }
  return sequenceObject
}

export default parseBFile
