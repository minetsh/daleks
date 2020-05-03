import qs from "qs";
import Page from "@/common/route/page";

const pages = {
  home: Page.of({ name: "home", path: "/pages/home/index" })
};

for (const name in pages) {
  const page = pages[name];
  pages[page.name] = page;
  pages[page.path] = page;
  pages[page.path.substr(1)] = page;
}

export const parse = (u?: string, params?: any): { u: string; page?: Page } => {
  if (!u) {
    console.error("页面路径错误");
    return {
      u: pages.home.path,
      page: pages.home
    };
  }
  const [path, search] = u.split("?");
  const s = qs.stringify({
    ...qs.parse(search),
    ...params
  });
  const page = pages[path];
  return {
    page,
    u: `${(page && page.path) || path}?${s}`
  };
};

export default pages;
