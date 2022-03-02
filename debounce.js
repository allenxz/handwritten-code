/**
 * 带有immediate选项的防抖函数
 * @param {function} fn 需要进行防抖的函数
 * @param {number} wait 间隔时间（毫秒），事件触发的前后间隔如果小于这个时间，将不会执行fn
 * @param {boolean} immediate 是否立即执行
 * @return {function} 用户最终调用的函数 
 */
const debounce = function (fn, wait = 100, immediate) {
  let timer, context, args

  const later = () => setTimeout(() => {
    timer = null
    if (!immediate) {
      fn.apply(context, args)
      context = args = null
    }
  }, wait)

  return function (...params) {
    if (!timer) {
      timer = later()
      if (immediate) {
        fn.apply(this, params)
      } else {
        context = this
        args = params
      }
    } else {
      clearTimeout(timer)
      timer = later()
    }
  }
}