#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec: run } = require('child_process');

const exec = async (command, options) => {
  return new Promise((resolve, reject) => {
    run(command, options, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(stderr);
        return;
      }
      resolve(stdout);
    });
  });
};

const release = async () => {
  const dir = path.join(__dirname, '../templates');
  const files = fs.readdirSync(dir);
  files
    .filter((filename) => {
      const stat = fs.statSync(path.join(dir, filename));
      return stat.isDirectory();
    })
    .map((filename) => ({
      filename,
      dalek: path.join(dir, filename, 'dalek.json'),
      path: path.join(dir, filename),
    }))
    .filter((obj) => fs.existsSync(obj.dalek))
    .forEach(async ({ dalek, filename }) => {
      await exec(
        `git subtree push --prefix templates/${filename} origin ${filename}`,
      );
    });
};

release();
