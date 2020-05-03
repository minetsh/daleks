import Taro from "@tarojs/taro";

export default class Storage<T> {
  private key: string;
  private defaultValue?: T;

  constructor(key: string, defaultValue?: T) {
    this.key = key;
    this.defaultValue = defaultValue;
  }

  public set value(value: T | undefined | null) {
    Taro.setStorageSync(this.key, value);
  }

  public get value(): T | undefined | null {
    try {
      const v = Taro.getStorageSync(this.key);
      if (v === void 0) {
        return this.defaultValue;
      }
      return v;
    } catch (e) {
      // keep empty
    }
    return this.defaultValue;
  }

  public async setValue(value: T | undefined | null): Promise<void> {
    try {
      await Taro.setStorage({
        key: this.key,
        data: value
      });
    } catch (e) {
      // keep empty
    }
  }

  public async getValue(defaultValue?: T): Promise<T | undefined | null> {
    try {
      const v = (await Taro.getStorage({
        key: this.key
      })) as any;
      if (v.data === void 0) {
        return defaultValue || this.defaultValue;
      }
      return v.data as any;
    } catch (e) {
      // keep empty
    }
    return defaultValue || this.defaultValue;
  }

  public static of<T>(key: string, defaultValue?: T): Storage<T> {
    return new Storage(key, defaultValue);
  }
}
