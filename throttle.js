/**
 * 节流函数
 * @param {function} fn 需要被节流的函数
 * @param {number} [wait=100] fn每隔多少时间执行一次
 * @param {string} [type='tail'] 是在每个时间段的开端执行还是在结尾
 * @return {function} 用户实际调用的函数 
 */
const throttle = function (fn, wait = 100, type = 'tail') {
  if (type === 'lead') {
    var previous = 0
  } else if (type === 'tail') {
    var timer = null
  } else {
    throw Error('type is error')
  }

  return function () {
    const context = this,
      args = arguments
    if (type === 'lead') {
      const now = Date.now()
      if (now - previous > wait) {
        fn.apply(context, args)
        previous = now
      }
    } else if (type === 'tail') {
      if (!timer) {
        timer = setTimeout(() => {
          clearTimeout(timer)
          fn.apply(context, args)
        }, wait)
      }
    }
  }
}