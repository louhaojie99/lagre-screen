/**
 * 选择参考 UI 涉及稿的 默认尺寸
 * @content 常见的屏幕分辨率
 * @Item    1280 * 720 ： 老式电脑的屏幕，目前很少见到
 * @Item    1366 * 768 ： 普通液晶显示器
 * @Item    1920 * 1080： 高清液晶显示器
 * @Item    2560 * 1440： 2K高清显示器
 * @Item    3840 * 2160： 4K高清显示器
 */
export const selectedDefaultSize: number[] = [1920, 1080];

/**
 * 防抖函数
 * @param {function} func  需要被保护的防抖的函数
 * @param {number}   wait  防抖时间
 * @returns
 */
export function debounce(func: () => {}, wait: number = 500) {
  let timer: number | null | undefined = null;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      func.apply(this);
    }, wait);
  };
}
