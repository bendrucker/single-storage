'use strict'

var test = require('tape')
var store = require('browser-store')
var session = require('browser-session-store')
var parallel = require('run-parallel')
var Storage = require('./')

test('read', function (t) {
  t.plan(2)

  var storage = Storage({
    foo: 'local',
    bar: 'session'
  })

  parallel([putFoo, putBar], function (err) {
    if (err) return t.end(err)
    storage(done)
  })

  function done (err, results) {
    if (err) return t.end(err)
    t.deepEqual(results, {
      foo: 1,
      bar: 2
    })
    t.throws(storage, /can only be read once/)
  }

  function putFoo (callback) {
    store.put('foo', 1, callback)
  }

  function putBar (callback) {
    session.put('bar', 2, callback)
  }
})

test('write', function (t) {
  t.plan(1)

  var storage = Storage({baz: 'local'})
  storage.baz.set(1)
  storage(function (err, results) {
    if (err) return t.end(err)
    t.deepEqual(results, {baz: 1})
  })
})
