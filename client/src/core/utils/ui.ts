import Taro from "@tarojs/taro";

const DEFAULT_RECT = {
  bottom: 82,
  height: 32,
  left: 317,
  right: 404,
  top: 50,
  width: 87
};

let cr: Taro.getMenuButtonBoundingClientRect.Rect | null = null;
export const getMenuBoundingRect = () => {
  if (!cr) {
    try {
      cr = Taro.getMenuButtonBoundingClientRect();
      if (cr) {
        if (cr.width === 0 || cr.height === 0) {
          cr = null;
          return DEFAULT_RECT;
        }
        return cr;
      }
      return DEFAULT_RECT;
    } catch (e) {
      console.error(e);
      return DEFAULT_RECT;
    }
  }
  return cr;
};

let info: Taro.getSystemInfoSync.Result;
export const getSystemInfo = () => {
  if (!info) {
    try {
      info = Taro.getSystemInfoSync();
    } catch (e) {
      console.error(e);
    }
  }
  return info;
};

export const getStatusBarHeight = () => {
  const i = getSystemInfo();
  if (i) {
    return i.statusBarHeight || 44;
  }
  return 44;
};

export const getActionBarHeight = () => {
  const rect = getMenuBoundingRect();
  if (rect) {
    return (rect.top - getStatusBarHeight()) * 2 + rect.height;
  }
  return 44;
};

export const getActionBarPaddingRight = () => {
  const rect = getMenuBoundingRect();
  if (rect) {
    return (rect.top - getStatusBarHeight()) * 3 + rect.width;
  }
  return 100;
};

export const getPagePanddingTop = () => {
  return getStatusBarHeight() + getActionBarHeight();
};

export const isTopPage = () => {
  const pages = Taro.getCurrentPages();
  if (pages) {
    return pages.length === 1;
  }
  return true;
};
