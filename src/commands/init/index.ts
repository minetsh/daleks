import commander from 'commander';
import Axios from 'axios';
import { clone } from '../../common/git/clone';
import { Config } from '../../common/configs';
import ora from 'ora';

export default async function (name: string, branch?: string): Promise<void> {
  // console.log('init', command, x, y);
  // console.log(command.pepper)

  const o = ora('创建项目').start();
  try {
    await clone(Config.repository, `${Config.root}/${name}`, branch);
    o.succeed();
  } catch (e) {
    o.fail(`${e}`);
  }

  // clone('git@github.com:minetsh/template.git',);

  // await Axios.get(
  //   'https://raw.githubusercontent.com/minetsh/template/master/template.json',
  //   // 'https://baidu.com'
  //   // {
  //   //   headers: {
  //   //     'User-Agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36`,
  //   //   },
  //   // },
  // )
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });
}
