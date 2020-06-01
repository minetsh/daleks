import Taro from "@tarojs/taro";

const compare = (a?: string, b?: string): number => {
  if (Object.is(a, b)) {
    return 0;
  }
  if (!a || !b) {
    return !a ? -1 : 1;
  }
  return parseInt(a) - parseInt(b);
};

export const compareVersion = (va: string, vb: string): number => {
  const vas = va.split(".");
  const vbs = vb.split(".");

  for (let i = 0; i < Math.max(vas.length, vbs.length); i++) {
    if (vas[i] !== vbs[i]) {
      return compare(vas[i], vbs[i]);
    }
  }

  if (vas.length === vbs.length) {
    return 0;
  }

  return vas.length - vbs.length;
};

let isSupport2DCache: boolean | undefined;
export const isSupport2D = (): boolean => {
  if (typeof isSupport2DCache === "boolean") {
    return isSupport2DCache;
  }
  try {
    const info = Taro.getSystemInfoSync();
    if (info) {
      return (isSupport2DCache = compareVersion(info.SDKVersion, "2.9.0") >= 0);
    }
  } catch (e) {
    console.error("isSupport2D", e);
  }
  return false;
};

export const uuid = (): string => {
  return Number(performance.now())
    .toString(36)
    .replace(".", "-");
};

let pixelRatioCache: number | undefined;
export const getPixelRatio = (): number => {
  if (typeof pixelRatioCache === "number") {
    return pixelRatioCache;
  }
  try {
    const info = Taro.getSystemInfoSync();
    if (info) {
      return (pixelRatioCache = info.pixelRatio);
    }
  } catch (e) {
    console.error("getPixelRatio", e);
  }
  return 1;
};

export const wrapTouchEvent = (event: any): any => {
  const { touches = [] } = event;
  for (let i = 0; i < touches.length; ++i) {
    const touch = touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }
  return event;
};
