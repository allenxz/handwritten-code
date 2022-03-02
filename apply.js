Function.prototype.myApply = function () {
  const context = Array.prototype.shift.call(arguments) || window

  context.fn = this
  const result = context.fn(...arguments)
  delete context.fn

  return result
}

// test
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); 