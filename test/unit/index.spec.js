const test = require('ava')
const freshload = require('../../index')

test((t) => {
  const r1 = require('../mock/index.js')
  const r2 = require('../mock/index.js')
  const e1 = freshload('../mock/index.js')
  const e2 = freshload('../mock/index.js')
  t.is(r1, r2)
  t.not(e1, e2)
})
