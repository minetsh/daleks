const compare = (a, b) => {
  if (Object.is(a, b)) {
    return 0;
  }
  if (!a || !b) {
    return !a ? -1 : 1;
  }
  return parseInt(a) - parseInt(b);
};

export const compareVersion = (va, vb) => {
  const vas = va.split('.');
  const vbs = vb.split('.');

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

let isSupportObserversCache;
export const isSupportObservers = () => {
  if (typeof isSupportObserversCache === 'boolean') {
    return isSupportObserversCache;
  }
  try {
    const info = wx.getSystemInfoSync();
    if (info) {
      return (isSupportObserversCache =
        compareVersion(info.SDKVersion, '2.6.1') >= 0);
    }
  } catch (e) {
    console.error('isSupportObservers', e);
  }
  return false;
};

export const uuid = () => {
  return Number(Date.now()).toString(36).replace('.', '-');
};

let pixelRatioCache;
export const getPixelRatio = () => {
  if (typeof pixelRatioCache === 'number') {
    return pixelRatioCache;
  }
  try {
    const info = wx.getSystemInfoSync();
    if (info) {
      return (pixelRatioCache = info.pixelRatio);
    }
  } catch (e) {
    console.error('getPixelRatio', e);
  }
  return 1;
};
