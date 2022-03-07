const sum = function(...args) {
  return args.reduce((a, b) => a + b)
}

const currying = function (fn) {
  const args = []
  return function result (...rest) {
    if (rest.length === 0) {
      return fn(...args)
    } else {
      args.push(...rest)
      return result
    }
  }
}

console.log(currying(sum)(1)(2)(3)())
console.log(currying(sum)(1, 2)(3)(4, 5)())