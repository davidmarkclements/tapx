#!/usr/bin/env node
'use strict'
const { spawnSync } = require('child_process')
const { join } = require('path')
const open = require('open')
const cwd = process.cwd()
spawnSync(
  join(__dirname, 'node_modules', '.bin', 'c8'), 
  [ 'report', '-r', 'html' ], 
  { stdio: 'inherit' }
)
if (process.argv.indexOf('--no-open') === -1) {
  open(join(cwd, 'coverage', 'index.html'))
}

