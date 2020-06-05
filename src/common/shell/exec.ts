import { exec as run } from 'child_process';

export const exec = async (command: string, options: any) => {
  return new Promise((resolve, reject) => {
    run(
      command,
      options,
      (error: any | null, stdout: string, stderr: string) => {
        if (error) {
          reject(error);
          return;
        }
        if (stderr) {
          reject(stderr);
          return;
        }
        resolve(stdout);
      },
    );
  });
};
