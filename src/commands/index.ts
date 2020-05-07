import { program } from 'commander';
import init from './init';
import list from './list';

program
  .command('init [name] [branch]')
  .description('初始化一个项目')
  .action(init);

program.command('list').description('获取模板列表').action(list);
