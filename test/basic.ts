import Deferred from '../'
import t from 'tap'
t.equal(Deferred.Deferred, Deferred)
const d = new Deferred()
t.match(d, {
  resolve: Function,
  reject: Function,
  promise: Object,
})
t.test('reject a promise', async t => {
  const d = new Deferred<string>()
  t.rejects(d.promise)
  d.reject(new Error('nope'))
})
t.test('resolve a promise', async t => {
  const d = new Deferred<string>()
  t.resolveMatch(d.promise, 'asdf')
  d.resolve('asdf')
})
t.test('typecheck', async t => {
  const d = new Deferred<{ a: 1 }>()
  //@ts-expect-error
  d.resolve('hello')

  // `unknown` is still "something"
  const e = new Deferred()
  //@ts-expect-error
  e.resolve()

  const f = new Deferred<void>()
  // this is fine though
  f.resolve()

  t.pass('this is fine')
})
