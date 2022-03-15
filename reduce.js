Array.prototype.myReduce = function (fn, initVal)  {
  const arr = this
  let res, i
  if (initVal === undefined) {
    res = arr[0]
    i = 1
  } else {
    res = initVal
    i = 0
  }
  for (; i < arr.length; i++) {
    res = fn(res, arr[i], i, arr)
  }
  return res
}

// test
const fn = (acc, cur) => acc + cur
const arr = [1, 2, 3]
console.log(arr.myReduce(fn, 0) === arr.reduce(fn, 0))