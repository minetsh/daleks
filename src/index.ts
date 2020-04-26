#!/usr/bin/env node

import { program } from 'commander';

program
  .version(require('../package.json').version, '-v, --version')
  .usage('<command> [options]');

// program.command('init').description('init a project.').action(main);

program.parse(process.argv);
