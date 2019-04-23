const { is } = require('@magic/test')
const docs = require('../src')

const css = require('@magic/css')

module.exports = [
  { fn: () => docs, expect: is.object, info: 'theme is an object' },
  { fn: () => css(docs), expect: is.object, info: 'theme can be parsed by css lib' },
  { fn: () => css.stringify(docs), expect: is.string, info: 'theme can be parsed by css lib' },
  { fn: () => css.stringify(docs), expect: t => t.includes('.Menu'), info: 'theme contains at least a .Menu style' },
]
