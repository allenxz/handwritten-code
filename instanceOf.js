const myInstanceOf = function (left, right) {
  const prototype = right.prototype
  left = left.__proto__

  while (true) {
    if (left === null || left === right) {
      return false
    } else if (left === prototype) {
      return true
    }
    left = left.__proto__
  }
}

// test
const F = function () {
  this.a = 1
}
const instance = new F()
console.log(myInstanceOf(instance, F))