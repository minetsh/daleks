import ora from 'ora';
import { clone } from '../../common/git/clone';
import { Config } from '../../common/configs';
import { ask_init_questions } from './questions';
import { reset } from '../../common/git/reset';

export default async function (name: string): Promise<void> {
  const answers: any = await ask_init_questions(name);
  const o = ora(`创建项目：${answers.name}`).start();
  try {
    await clone(
      Config.repository,
      `${Config.root}/${answers.name}`,
      answers.template,
    );
    await reset(`${Config.root}/${answers.name}`);
    o.succeed();
  } catch (e) {
    o.fail(`${e}`);
  }
}
