import * as fs from 'fs';
import inquirer, { prompt, Question } from 'inquirer';
import list, { templates, DaleksConfig } from '../list';
import ora from 'ora';

export const ask_init_questions = async (name?: string) => {
  const answers = { name };
  if (!name) {
    const answer = await ask_name();
    Object.assign(answers, answer);
  } else if (fs.existsSync(name)) {
    const answer = await ask_name(true);
    Object.assign(answers, answer);
  }

  const o = ora(`正在获取模板项目列表`).start();
  const config = await templates();
  o.succeed();

  Object.assign(answers, await ask_template(config));

  return answers;
};

export const ask_name = async (exists: boolean = false) => {
  return await prompt([
    {
      type: 'input',
      name: 'name',
      message: exists
        ? '当前目录已经存在同名项目，请换一个项目名：'
        : '请输入项目名称：',
      validate(name?: string) {
        if (!name) {
          return '请输入合法的项目名称';
        }
        if (fs.existsSync(name)) {
          return '项目名重复！请重新输入';
        }
        return true;
      },
    },
  ]);
};

export const ask_template = async (config: DaleksConfig) => {
  const { templates = [] } = config;
  return await prompt([
    {
      type: 'list',
      name: 'template',
      message: '请选择模板',
      choices: templates.map((template) => ({
        name: template.name,
      })),
    },
  ]);
};

export const question_template = {
  type: 'list',
  name: 'template',
  message: '请选择模板',
  choices: templates().then((config) => {
    const { templates: tps = [] } = config;
    return tps.map((template: any) => ({
      name: template.name,
    }));
  }),
};
