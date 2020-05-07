import commander from 'commander';
import Axios from 'axios';
import ora from 'ora';
import inquirer from 'inquirer';
import * as fs from 'fs';
import { clone } from '../../common/git/clone';
import { Config } from '../../common/configs';
import { ask_init_questions } from './questions';

export default async function (name: string): Promise<void> {
  const answers: any = await ask_init_questions(name);
  const o = ora(`创建项目：${answers.name}`).start();
  try {
    await clone(
      Config.repository,
      `${Config.root}/${answers.name}`,
      answers.template,
    );
    o.succeed();
  } catch (e) {
    o.fail(`${e}`);
  }
}
