import { exec } from 'node:child_process'
import { spawn } from 'node:child_process'

// Check to see if we have the gp binary on our path.
exec( 'which gp', ( error, stdout, stderr ) => {
  if ( error || stderr ) {
    console.error( `could not find gp binary: ${error ? error : stderr}` )
  }
  else if ( stdout ) {
    console.log( `gp binary detected at: ${stdout.trim()}` )
  }
} )

// Spawn an instance of gp with the quiet flag. Ask gp to factor 10.
// For more info on why we're using unbuffer, see
// https://github.com/liammulh/retroscope/issues/4#issuecomment-1410968644.
const gpChildProcess = spawn( 'unbuffer', [ '-p', 'gp', '-q' ] )
gpChildProcess.stdin.write( 'factor(10)\n' )

gpChildProcess.stdout.on( 'data', data => {
  console.log( `stdout: ${data}` )
} )
gpChildProcess.stderr.on( 'data', data => {
  console.error( `stderr: ${data}` )
} )
gpChildProcess.on( 'close', code => {
  console.log( `gp child process exited with code: ${code}` )
} )
