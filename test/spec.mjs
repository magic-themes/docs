import { is } from '@magic/test'
import docs from '../src/index.mjs'

import css from '@magic/css'

export default [
  { fn: () => docs, expect: is.function, info: 'theme is a function' },
  { fn: () => css(docs), expect: is.object, info: 'theme can be parsed by css lib' },
  { fn: () => css.stringify(docs), expect: is.string, info: 'theme can be parsed by css lib' },
  {
    fn: () => css.stringify(docs),
    expect: t => t.includes('.Menu'),
    info: 'theme contains at least a .Menu style',
  },
]
