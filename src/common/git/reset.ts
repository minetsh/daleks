import fs from 'fs';
import git from 'simple-git/promise';
import { exec } from 'child_process';

export const reset = async (targetPath: string) => {
  const path = `${targetPath}/.git`;
  if (fs.existsSync(path)) {
    await exec(`rm -rf ${path}`);
    await git(targetPath).init();
    await git(targetPath).add('.');
    await git(targetPath).commit('Init project.');
  }
};
