import Axios from 'axios';
import ora from 'ora';

interface Template {
  templates: [
    {
      name: string;
      branch: string;
    },
  ];
}

export default async function (): Promise<void> {
  const o = ora(`获取列表`).start();
  try {
    const response = await Axios.get(
      `https://api.github.com/repos/minetsh/template/contents/template.json?ref=master`,
    );
    const { status, data } = response;
    if (status === 200) {
      o.succeed();
      const { content } = data;
      const buf = Buffer.from(content, 'base64');
      const template: Template = JSON.parse(buf.toString());
      (template.templates || []).forEach((t, index: number) => {
        console.log(`${index + 1}. ${t.name}`);
      });
    } else {
      o.fail(`${response.status}: ${response.statusText}`);
    }
  } catch (e) {
    o.fail(`${e}`);
  }
}
