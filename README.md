# tiny-version-compare [![Build Status](https://travis-ci.org/bfred-it/tiny-version-compare.svg?branch=master)](https://travis-ci.org/bfred-it/tiny-version-compare)

> Compare two software versions, with any number of points (<1KB)

Supports most version types, from `r12.3` to `1.03.4.234567-RC4`. Development versions are sorted as: `dev`, `alpha`, `beta`, `rc`

## Install

```
$ npm install tiny-version-compare
```


## Usage

```js
const versionCompare = require('tiny-version-compare');

switch (versionCompare('1.2.3', '2.3.4')) {
	case -1: console.log('Second one is greater'); break
	case 1:  console.log('Second one is lower'); break
	case 0:  console.log('Versions are equal'); break
}

['v2.0-beta', '1.0', 'v2.0', '1.0.1'].sort(versionCompare);
// ['1.0', '1.0.1', 'v2.0-beta', 'v2.0']
```


## API
### versionCompare(versionA, versionB)

Returns `-1` if `versionA` is greater, `1` if `versionB` is greater, `0` if the versions are equivalent.

#### versionA, versionB

Type: `string`

The versions to compare.

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)

