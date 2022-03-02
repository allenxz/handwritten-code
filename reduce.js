Array.prototype.myReduce = function (fn, initVal)  {
  const arr = this
  let res = initVal === undefined ? arr[0] : initVal
  for (let i = 0; i < arr.length; i++) {
    res = fn(res, arr[i], i, arr)
  }
  return res
}

// test
const fn = (acc, cur) => acc + cur
const arr = [1, 2, 3]
console.log(arr.myReduce(fn, 0) === arr.reduce(fn, 0))