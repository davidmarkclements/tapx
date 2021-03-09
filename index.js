import tap from 'tap'

export { default as mockalicious } from 'mockalicious'

export const {
  Test, Spawn, Stdin,
  spawn, sub,
  todo, skip, only, test,
  stdinOnly, stdin,
  bailout,
  comment,
  timeout,
  main,
  process,
  processSubtest,
  addAssert,
  pragma,
  plan, end,
  beforeEach,
  afterEach,
  teardown,
  autoend,
  pass, fail, ok, notOk,
  emits,
  error, equal, not, same, notSame, strictSame, strictNotSame,
  testdir, fixture,
  matchSnapshot,
  hasStrict, match, notMatch, type,
  expectUncaughtException, throwsArgs, throws, doesNotThrow,
  rejects, resolves, resolveMatch, resolveMatchSnapshot
} = tap

const kGetSnapshot = Object.getOwnPropertySymbols(Test.prototype).find((s) => /_getSnapshot/.test(s.toString()))
const { constructor: Snapshot } = Test.prototype[kGetSnapshot].call({ fullname: 'dummy' })
const kFile = Symbol('tapx-snapshot-file')
Object.defineProperty(Snapshot.prototype, 'file', {
  set (value) {
    this[kFile] = value.replace(/\.js$/, '.cjs')
    return true
  },
  get () {
    return this[kFile]
  }
})

export default tap
