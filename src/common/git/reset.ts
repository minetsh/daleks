import git from 'simple-git/promise';
import { exec } from 'child_process';

export const reset = async (targetPath: string) => {
  const x = exec('ls -al');
  console.log(x);
};
