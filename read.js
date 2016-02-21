'use strict'

var assert = require('assert-ok')
var parallel = require('run-parallel')
var map = require('map-values')
var partial = require('ap').partial
var stores = require('./stores')

module.exports = Read

function Read (keys) {
  var attempts = 0
  return function read (callback) {
    assert(++attempts <= 1, 'storage can only be read once')
    return parallel(map(keys, Get), callback)
  }
}

function Get (store, key) {
  return partial(stores[store].get, key)
}

