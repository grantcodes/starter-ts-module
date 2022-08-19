import test from 'ava'

import { example } from '../lib/example'

test('example', t => {
  t.is(example('Grant'), 'Hello Grant 👋')
})
