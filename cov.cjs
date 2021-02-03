#!/usr/bin/env node
'use strict'
const { spawnSync } = require('child_process')
const { join, dirname } = require('path')
const c8 = dirname(require.resolve('c8/package.json'))
const { bin } = require('c8/package.json')
const open = require('open')
const cwd = process.cwd()
spawnSync(
  process.execPath,
  [join(c8, bin.c8), 'report', '-r', 'html'],
  { stdio: 'inherit' }
)
if (process.argv.indexOf('--no-open') === -1) {
  open(join(cwd, 'coverage', 'index.html'))
}
