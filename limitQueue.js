// JS 实现一个输入url数组与并发数的并发数量控制请求队列函数
const fn = (url) => new Promise(resolve => {
  setTimeout(() => {
    const time = new Date()
    console.log(url, time)
    resolve({ url, time })
  }, 1000);
})

const limitQueue = (urls, limit) => {
  let count = 0

  for (let i = 0; i < limit; i++) {
    run()
  }

  function run() {
    new Promise((resolve) => {
      resolve(fn(urls[count++]))
    }).then(() => {
        if (count < urls.length) {
          run()
        }
    })
  }
}


// 测试
const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

limitQueue(urls, 2)