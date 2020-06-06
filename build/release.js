#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const git = require('simple-git/promise');
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
  return Promise.all(
    files
      .filter((filename) => {
        const stat = fs.statSync(path.join(dir, filename));
        return stat.isDirectory();
      })
      .map((filename) => ({
        filename,
        config: path.join(dir, filename, 'dalek.json'),
        path: path.join(dir, filename),
      }))
      .filter((obj) => fs.existsSync(obj.config))
      .map(releaseDalek),
  );
};

const releaseDalek = async ({ config, filename, path }) => {
  const content = fs.readFileSync(config);
  if (!content) return;
  const dalek = JSON.parse(content);

  await git().raw([
    'subtree',
    'push',
    '--prefix',
    `templates/${filename}`,
    'origin',
    `${dalek.branch}`,
  ]);
  console.log(`release ${dalek.name}`);
  return dalek;
};

release().then((daleks) => {
  const config = {
    templates: daleks,
  };
  fs.writeFileSync(
    path.join(__dirname, '../daleks.json'),
    JSON.stringify(config, null, 2),
  );
});
