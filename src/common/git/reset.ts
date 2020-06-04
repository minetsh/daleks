import git from 'simple-git/promise';

export const reset = (targetPath: string) => {
  
  return git().clone(
    remoteRepo,
    targetPath,
    branch ? [`-b${branch}`] : undefined,
  );
};
