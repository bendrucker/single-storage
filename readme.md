# single-storage [![Build Status](https://travis-ci.org/bendrucker/single-storage.svg?branch=master)](https://travis-ci.org/bendrucker/single-storage)

> Browser storage that can only be read once


## Install

```
$ npm install --save single-storage
```


## Usage

```js
var Storage = require('single-storage')
var storage = Storage({
  auth: 'local',
  session: 'session'  
})
// auth will be read from localStorage
// session will be read from sessionStorage

storage(function (err, data) {
  // null, {auth: ..., session: ...}  
})

storage(callback)
//=> throws: storage can only be read once

storage.auth.set({id: 123})
//=> writes new auth data to localStorage
```

## API

#### `Storage(keys)` -> `function`

Returns the `read` function with set methods under each key.

##### keys

*Required*  
Type: `object`

An object where the keys are storage keys and the values are either `local` or `session`. Each key can be written via `${key}.set(value)`.

#### `read(callback)` -> `undefined`

Reads in all the values for the specified `keys`. 

##### callback

*Required*  
Type: `function`  
Arguments: `err, data`

Passes the storage data (key/value) to the supplied callback..


## License

MIT © [Ben Drucker](http://bendrucker.me)
