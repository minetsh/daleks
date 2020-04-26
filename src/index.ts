import https from 'https';
import { program } from 'commander';
import git from 'simple-git/promise';

program
  .version(require('../package.json').version, '-v, --version')
  .usage('<command> [options]');

// https.get('https://raw.githubusercontent.com/minetsh/template/master/template.json')

// git()
//   .clone('git@github.com:minetsh/template.git', './test', [
//     '-bweapp-taro-cloud',
//   ])
//   .then((res) => {
//     console.log('克隆成功', res);
//   })
//   .catch((e) => {
//     console.error('克隆失败', e);
//   });

// program.command('init').description('init a project.').action(main);

program.parse(process.argv);
