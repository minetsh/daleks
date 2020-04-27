import git from 'simple-git/promise';

export const clone = (
  remoteRepo: string,
  targetPath: string,
  branch?: string,
) => {
  return git().clone(
    remoteRepo,
    targetPath,
    branch ? [`-b${branch}`] : undefined,
  );
};
