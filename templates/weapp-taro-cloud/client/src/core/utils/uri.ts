import qs from "qs";

export const buildURI = (uri?: string, params?: any) => {
  if (uri) {
    const [path, search] = uri.split("?");
    return `${path}?${qs.stringify({
      ...qs.parse(search),
      ...params
    })}`;
  }
  return qs.stringify(params);
};
