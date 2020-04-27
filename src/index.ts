#!/usr/bin/env node

import https from 'https';
import { program } from 'commander';
import git from 'simple-git/promise';
import axios from 'axios';
import ora from 'ora';
import './commands/index';

program
  .version(require('../package.json').version, '-v, --version')
  .usage('<command> [options]');

// // https://raw.githack.com/

// // 'https://raw.githubusercontent.com/minetsh/template/master/template.json',

// const o = ora('正在创建模板工程').start();

// axios
//   .get(
//     'https://raw.githack.com/minetsh/template/master/template.json',
//     // {
//     //   headers: {
//     //     'User-Agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36`,
//     //   },
//     // },
//   )

//   .then((response) => {
//     console.log('响应');
//     o.succeed();
//   })
//   .catch((e) => {
//     // console.error(e);
//     o.fail(`${e}`);
//   });

// console.log('sss');

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
