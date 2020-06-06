export const getOriginalAvatarUrl = (url?: string) => {
  if (url) {
    return url.replace(/132$/g, "0");
  }
  return url;
};
