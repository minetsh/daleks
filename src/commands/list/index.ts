import Axios from 'axios';
import ora from 'ora';

export interface Dalek {
  name: string;
  branch: string;
}

export interface DaleksConfig {
  templates: Dalek[];
}

export const templates = async (): Promise<DaleksConfig> => {
  const response = await Axios.get(
    `https://api.github.com/repos/minetsh/template/contents/daleks.json?ref=master`,
  );
  const { status, data } = response;
  if (status === 200) {
    const { content } = data;
    const buf = Buffer.from(content, 'base64');
    return JSON.parse(buf.toString());
  } else {
    throw response.statusText;
  }
};

export default async function (): Promise<void> {
  const o = ora(`获取列表`).start();
  try {
    const config = await templates();
    o.succeed();
    (config.templates || []).forEach((t, index: number) => {
      console.log(`${index + 1}. ${t.name}`);
    });
  } catch (e) {
    o.fail(`${e}`);
  }
}
