#!/usr/bin/env node
'use strict'
const { spawn } = require('child_process')
const { join, dirname } = require('path')
const tap = dirname(require.resolve('tap/package.json'))
const { bin } = require('tap/package.json')
const cov = (process.argv.indexOf('--100') > -1) ? [
  '--check-coverage', '--lines 100', '--functions 100', '--branches 100'
] : []

spawn(
  join(__dirname, 'node_modules', '.bin', 'c8'),
  [ ...cov, 'node', join(tap, bin.tap), ...process.argv.slice(2), '--no-cov' ],
  { stdio: 'inherit', env: { ...process.env, TAP_NO_ESM: 1 } }
)
