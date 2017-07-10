## WebpackStableChunkId

Keep chunk order defined in entry config, which result in stability of chunkhash.

As official hashedmoduleidsplugin just use hash value instead number ids for modules, exclude entry chunks. Entry chunks order may change in sometime, which lead to a unstability of chunkhash, this is the problem we resolve.
