# retroscope

This was an experiment to see if it was reasonable to
rewrite [Numberscope's](https://numberscope.colorado.edu) back
end in Node.

What I tried to do was spawn a `gp` child process and send
commands to `gp`. (`gp` is
[PARI/GP's](https://pari.math.u-bordeaux.fr/) REPL where you can
issue commands like `factor(10)` to get the prime factors of 10.)

I was able to spawn an instance of `gp` and send commands to
it. The commands came back with ANSI escape codes, which would
have been annoying to strip out.

The ANSI escape code wouldn't have been too difficult to overcome,
but having to deal with multiple clients requesting access to
an instance of `gp` or a pool of instances of `gp`, while a fun
programming problem, would have added a lot of complexity to the
back end.

Another issue was that `gp` isn't as fast as the vanilla `libpari`
C library. Hard to say whether that would have been a performance
issue.

Ultimately, I decided it would be too complex and therefore
unreasonable to rewrite the back end in Node. However, I looked
at
[Deno's foreign function interface](https://deno.land/manual@v1.30.0/runtime/ffi_api),
and it looks a lot more promising for this sort of thing. (I opted
not to even try to use the ffi package on NPM because it looked
abandoned.)

Another alternative would be to write the back end in C or
C++, but it might be hard to find maintainers for that in
the future.