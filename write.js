'use strict'

var map = require('map-values')
var stores = require('./stores')

module.exports = Write

function Write (keys) {
  return map(keys, Put)
}

function Put (store, key) {
  return {
    set: function set (value) {
      stores[store].put(key, value)
    }
  }
}
