# tapx

> Native ESM Support for node-tap

Supports the following:

```js
import { test } from 'tapx'
```

It also overrides the `tap` test runner so that the TAP_NO_ESM environment variable is set. This (counterintuitively) allows node-tap to work with native ESM modules - because it suppresses faux-ESM support.

`nyc` currently does not work with native ESM. `tapx` uses `c8` to provide coverage instead. 

Due to some coverage bugs on Node 12 or below, coverage is not generated at all for Node 12 or below. 
Tests will still run. Use Node 14 to check coverage.

An additional `cov` command is also provided, which is the equivalent to `tap --coverage-report=HTML`.

This module (at least the version 0.x.x) line will be deprecated when https://github.com/tapjs/node-tap/pull/668/files lands and when node-tap has coverage support for native ESM.

Snapshots are modified so that they're saved with a `.cjs` extension instead of `.js`. This prevents `"type": "module"`
in a project's `package.json` from invalidating CommonJS `.js` files in the `tap-snapshots` folder.

## ESM Mocking

As of v0.1.0 `tapx` now comes integrated with [`mockalicious`](https://github.com/davidmarkclements/mockalicious).

```js
import { test, mockalicious } from 'tapx'

const load = mockalicious(import.meta.url)

test('..', async ({ok}) => {
  const myModule = load('../index.js', {
    moduleToMock: {
      default () {
        // mocking default export...
      },
      foo: 1, //mocking other exports
    }
  })
  ok('hooray')
})
```

See the [`mockalicious`](https://github.com/davidmarkclements/mockalicious) repository for more information.

## License

ISC