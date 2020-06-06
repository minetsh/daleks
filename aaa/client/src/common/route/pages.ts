import Page from "@/common/route/page";
import AuthType from "@/common/auth";

const pages = {
  home: Page.of({ name: "home", path: "/pages/home/index" })
};

for (const name in pages) {
  const page = pages[name];
  pages[page.path] = page;
  pages[page.path.substr(1)] = page;
}

export default pages;
