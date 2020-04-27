import { program } from 'commander';
import init from './init';

program
  .command('init <name> [branch]')
  .description('初始化一个项目')
  .action(init);
