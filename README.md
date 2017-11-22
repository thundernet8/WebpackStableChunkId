## WebpackStableChunkId

Keep chunk order defined in entry config, which result in stability of
chunkhash.

As official hashedmoduleidsplugin just use hash value instead number ids for
modules, exclude entry chunks. Entry chunks order may change in sometime, which
lead to a unstability of chunkhash, this is the problem we resolve.

## Install

```
npm add webpackstablechunkid --save-dev
```

or

```
yarn add webpackstablechunkid --dev
```

## Usage

In your webpack config file, import plugin:

```
var WebpackStableChunkId = require("webpackstablechunkid");
```

then add one record at top of plugins option:

```
new WebpackStableChunkId()
```

## More

Here is a [post](https://github.com/thundernet8/Blog/issues/2) to explain why we
need it, and a
[demo test project](https://github.com/thundernet8/WebpackHashTest) for more
details.

## License

WebpackStableChunkId is freely distributable under the terms of the
[MIT license](https://github.com/thundernet8/WebpackStableChunkId/blob/master/LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fthundernet8%2FWebpackStableChunkId.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fthundernet8%2FWebpackStableChunkId?ref=badge_large)
