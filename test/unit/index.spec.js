const test = require('ava')
const exige = require('../../index')

test((t) => {
  const r1 = require('../mock/index.js')
  const r2 = require('../mock/index.js')
  const e1 = exige('../mock/index.js')
  const e2 = exige('../mock/index.js')
  t.is(r1, r2)
  t.not(e1, e2)
})
