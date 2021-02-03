#!/usr/bin/env node
'use strict'
const { spawn } = require('child_process')
const { join, dirname } = require('path')
const tap = dirname(require.resolve('tap/package.json'))
const c8 = dirname(require.resolve('c8/package.json'))
const { bin } = require('tap/package.json')
const c8Path = join(c8, require('c8/package.json').bin.c8)
const cov = (process.argv.indexOf('--100') > -1) ? [
  '--check-coverage', '--lines 100', '--functions 100', '--branches 100'
] : []

spawn(
  process.execPath,
  [c8Path, ...cov, 'node', join(tap, bin.tap), ...process.argv.slice(2), '--no-cov'],
  { stdio: 'inherit', env: { ...process.env, TAP_NO_ESM: 1 } }
)
