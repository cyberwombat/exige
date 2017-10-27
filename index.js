'use strict'
const path = require('path')
const resolveFrom = require('resolve-from')
const callerPath = require('caller-path')

const exige = (name) => {
  let modPath = resolveFrom(path.dirname(callerPath()), name)

  const search = (name, callback) => {
    let mod = require.resolve(name)

    if (mod && ((mod = require.cache[mod]) !== undefined)) {
      (function traverse (mod) {
        mod.children.forEach((child) => {
          traverse(child)
        })

        callback(mod)
      }(mod))
    }
  }
  search(modPath, (mod) => {
    delete require.cache[mod.id]
  })

  Object.keys(module.constructor._pathCache).forEach((cacheKey) => {
    if (cacheKey.indexOf(modPath) > 0) {
      delete module.constructor._pathCache[cacheKey]
    }
  })

  return require(modPath)
}

module.exports = exige
