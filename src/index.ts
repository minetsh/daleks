#!/usr/bin/env node

import { program } from 'commander';
import './commands/index';

program
  .version(require('../package.json').version, '-v, --version')
  .usage('<command> [options]');

program.parse(process.argv);
