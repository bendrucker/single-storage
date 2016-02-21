'use strict'

var assign = require('xtend/mutable')
var Read = require('./read')
var Write = require('./write')

module.exports = Storage

function Storage (keys) {
  return assign(Read(keys), Write(keys))
}
