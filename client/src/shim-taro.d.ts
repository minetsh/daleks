declare type Uri = {
  url: string;
  urlType: "self" | "web" | "mini";
  appId?: string;
};

declare namespace Taro {
  function $web(url?: string, params?: any): void;

  function $navigate(name?: string, params?: any): void;

  function $redirect(name?: string, params?: any): void;

  function $tab(name?: string, params?: any): void;

  function $launch(name?: string, params?: any): void;

  function $go(uri: Uri, params?: any): void;

  function $back(delta?: number, delay?: number): void;

  // function $getStorage <T = any> (key: string, defaultValue?: T): Promise<T>

  // function $setStorage <T = any> (key: string, value: T): Promise<T>

  function $report(obj: any, tag?: string): void;

  function $toast(
    msg?: string,
    extra?: Partial<Taro.showToast.Option>
  ): Promise<any>;

  function $loading(
    title?: string,
    mask?: boolean,
    delay?: number
  ): Promise<any>;

  function $modal(
    OBJECT: showModal.Option
  ): Promise<showModal.SuccessCallbackResult>;

  function $hide(): void;
}

declare namespace wx {
  function createIntersectionObserver(comp: any): any;
}
